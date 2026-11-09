#!/usr/bin/env node
/*
 * Screenshots of the built site with headless Chrome, over the DevTools protocol, with
 * no dependencies. Used to check the hero's scroll choreography and the pages at several
 * viewport sizes; also prints any JavaScript errors the pages throw.
 *
 *   node tools/shots.mjs plan.json
 *
 * plan.json: { "chrome": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
 *              "shots": [ { "url": "http://127.0.0.1:4321/", "out": "shots/home.png",
 *                           "width": 1440, "height": 900, "scale": 1, "mobile": false,
 *                           "scroll": 0, "wait": 1200, "full": false, "eval": "..." } ] }
 */
import { spawn } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { tmpdir } from 'node:os';

const plan = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const chromePath = plan.chrome ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port = 9300 + Math.floor(Math.random() * 500);
const profile = mkdtempSync(join(tmpdir(), 'shots-profile-'));

const chrome = spawn(
  chromePath,
  [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--hide-scrollbars',
    '--disable-gpu',
    '--window-size=1440,900',
    'about:blank',
  ],
  { stdio: 'ignore' }
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForChrome() {
  for (let i = 0; i < 100; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/list`);
      const targets = await res.json();
      const page = targets.find((t) => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(100);
  }
  throw new Error('Chrome did not start');
}

class CDP {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    this.listeners = new Map();
    ws.addEventListener('message', (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
      } else if (msg.method) {
        for (const fn of this.listeners.get(msg.method) ?? []) fn(msg.params);
      }
    });
  }
  send(method, params = {}) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }
  on(method, fn) {
    if (!this.listeners.has(method)) this.listeners.set(method, []);
    this.listeners.get(method).push(fn);
  }
  once(method) {
    return new Promise((resolve) => this.on(method, resolve));
  }
}

try {
  const wsUrl = await waitForChrome();
  const ws = new WebSocket(wsUrl);
  await new Promise((r) => ws.addEventListener('open', r));
  const cdp = new CDP(ws);
  await cdp.send('Page.enable');
  await cdp.send('Runtime.enable');
  await cdp.send('Log.enable');
  const errors = [];
  cdp.on('Runtime.exceptionThrown', (p) => errors.push(`exception: ${p.exceptionDetails.text} ${p.exceptionDetails.exception?.description ?? ''}`));
  cdp.on('Runtime.consoleAPICalled', (p) => {
    if (p.type === 'error' || p.type === 'warning') errors.push(`console.${p.type}: ${p.args.map((a) => a.value ?? a.description).join(' ')}`);
  });
  cdp.on('Log.entryAdded', (p) => {
    if (p.entry.level === 'error') errors.push(`log: ${p.entry.text} ${p.entry.url ?? ''}`);
  });

  let lastUrl = null;
  for (const shot of plan.shots) {
    const width = shot.width ?? 1440;
    const height = shot.height ?? 900;
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: shot.scale ?? 1,
      mobile: Boolean(shot.mobile),
    });
    if (shot.mobile) await cdp.send('Emulation.setTouchEmulationEnabled', { enabled: true });
    if (shot.media) await cdp.send('Emulation.setEmulatedMedia', { features: shot.media });
    if (shot.url !== lastUrl || shot.reload) {
      const loaded = cdp.once('Page.loadEventFired');
      await cdp.send('Page.navigate', { url: shot.url });
      await loaded;
      lastUrl = shot.url;
      await sleep(shot.settle ?? 600);
    }
    if (shot.eval) await cdp.send('Runtime.evaluate', { expression: shot.eval, awaitPromise: true });
    if (shot.scroll !== undefined) {
      await cdp.send('Runtime.evaluate', { expression: `window.scrollTo(0, ${shot.scroll}); window.dispatchEvent(new Event('scroll'));` });
    }
    await sleep(shot.wait ?? 800);
    const { data } = await cdp.send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: Boolean(shot.full),
      ...(shot.full
        ? {
            clip: await cdp
              .send('Runtime.evaluate', { expression: 'Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)', returnByValue: true })
              .then((r) => ({ x: 0, y: 0, width, height: Math.min(r.result.value, 20000), scale: 1 })),
          }
        : {}),
    });
    mkdirSync(dirname(shot.out), { recursive: true });
    writeFileSync(shot.out, Buffer.from(data, 'base64'));
    const info = await cdp.send('Runtime.evaluate', {
      expression: shot.probe ?? 'JSON.stringify({scrollY: window.scrollY, tanks: document.querySelectorAll("[data-tank]").length, fish: document.querySelectorAll(".tank__fish").length})',
      returnByValue: true,
    });
    console.log(`${shot.out}  ${info.result.value}`);
  }
  if (errors.length) {
    console.log('\nPage errors:');
    for (const e of [...new Set(errors)]) console.log('  ' + e);
  } else {
    console.log('\nNo page errors.');
  }
  ws.close();
} finally {
  chrome.kill();
  // Chrome keeps writing its profile for a moment after it is told to quit.
  await sleep(400);
  try {
    rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 300 });
  } catch {
    /* a leftover temp profile is harmless */
  }
}
