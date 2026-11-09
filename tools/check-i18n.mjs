#!/usr/bin/env node
/*
 * Checks the translations against the English originals, with no dependencies.
 *
 *   node tools/check-i18n.mjs            the words: src/i18n/*.ts and src/content/i18n/
 *   node tools/check-i18n.mjs --strict   also fail on draft errors and missing translations
 *   node tools/check-i18n.mjs --dist     the built site in dist/: language tags, canonical
 *                                        and hreflang links, and every internal link
 *
 * `npm run build` runs the first form before building, so a language file that has
 * drifted out of shape, or a link into the wrong language, stops the site being published.
 * Unpublished draft errors are warnings unless --strict is used.
 * A page with no translation yet is only reported: it is left out of that language (see
 * src/lib/content.ts) and can follow later.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = new Set(process.argv.slice(2));
const strict = args.has('--strict');

const errors = [];
const warnings = [];
const error = (where, what) => errors.push(`${where}: ${what}`);
const warn = (where, what) => warnings.push(`${where}: ${what}`);

// Every language, published or still a draft: drafts are checked too, so they are ready
// the day they are published.
process.env.I18N_DRAFTS = '1';
const load = async (file) => (await import(pathToFileURL(join(ROOT, file)).href)).default;
const { locales, defaultLocale, drafts } = await import(pathToFileURL(join(ROOT, 'src/i18n/locales.ts')).href);
const others = locales.filter((l) => l.code !== defaultLocale);

/* ---------- the words ---------- */

async function checkSource() {
  const en = await load('src/i18n/en.ts');
  for (const locale of others) {
    const file = `src/i18n/${locale.code}.ts`;
    if (!existsSync(join(ROOT, file))) {
      error(file, 'missing');
      continue;
    }
    const dict = await load(file);
    if (dict === en) {
      (drafts.includes(locale.code) ? warn : error)(file, 'is still the English placeholder');
      continue;
    }
    compare(en, dict, file, '');
  }
  checkContent();
}

const SENTINEL = (i) => `⟦${i}⟧`;

/** Arguments that make sense for the functions that cannot be called with just anything. */
const SAMPLES = {
  'tank.label': [
    ['small', SENTINEL(1), 3],
    ['medium', SENTINEL(1), 5],
    ['large', SENTINEL(1), 1],
    ['watch', SENTINEL(1), 2],
  ],
  'ld.features': [[{ species: 58, packs: 12, props: 19 }]],
  'pack.description': [
    [{ tagline: SENTINEL(0), pack: SENTINEL(1), count: 5, fish: SENTINEL(2), free: true }],
    [{ tagline: SENTINEL(0), pack: SENTINEL(1), count: 3, fish: SENTINEL(2), free: false }],
  ],
  'pack.fishText': ['swimmer', 'floater', 'creeper', 'crawler'].flatMap((swim) => [1, 1.2, 0.9].map((scale) => [SENTINEL(0), swim, scale])),
  'press.paragraph': [[{ species: 58, props: 19, languages: 12, developer: SENTINEL(0) }]],
  'footer.legal': [[2026, SENTINEL(1)]],
};
/** Counts, tried at several sizes so that a language's plural rules are all exercised. */
const COUNTS = [1, 2, 3, 5, 8, 12, 19, 21, 58, 101];

function kind(value) {
  return Array.isArray(value) ? 'array' : value === null ? 'null' : typeof value;
}

function tags(html) {
  const found = {};
  for (const [, name] of html.matchAll(/<\/?([a-zA-Z][a-zA-Z0-9]*)\b/g)) found[name] = (found[name] ?? 0) + 1;
  return found;
}
function hrefs(html) {
  return [...html.matchAll(/href="([^"]*)"/g)].map((m) => m[1]).sort();
}

function compareText(a, b, file, path, isHtml) {
  if (!b.trim()) return error(file, `${path} is empty`);
  if (/undefined|NaN|\[object Object\]/.test(b)) error(file, `${path} contains a broken value: ${b.slice(0, 80)}`);
  if (isHtml) {
    const ta = tags(a);
    const tb = tags(b);
    for (const name of new Set([...Object.keys(ta), ...Object.keys(tb)])) {
      if ((ta[name] ?? 0) !== (tb[name] ?? 0)) warn(file, `${path} has ${tb[name] ?? 0} <${name}> tag(s) where English has ${ta[name] ?? 0}`);
    }
    if (JSON.stringify(hrefs(a)) !== JSON.stringify(hrefs(b))) error(file, `${path} links differ from the English: ${hrefs(b).join(', ')}`);
  } else if (/<\/?[a-z][^>]*>|&[a-z]+;|&#\d+;/i.test(b)) {
    error(file, `${path} is plain text but holds a tag or an entity: ${b.slice(0, 80)}`);
  }
}

function compare(a, b, file, path) {
  const ka = kind(a);
  const kb = kind(b);
  if (ka !== kb) return error(file, `${path || '(root)'} should be ${ka === 'function' ? 'a function' : `a ${ka}`}, but is a ${kb}`);
  const isHtml = /html$/i.test(path.split('.').pop() ?? '') || /\.html$|Html\[|\.html\b/.test(path) || path.includes('Html');
  if (ka === 'string') return compareText(a, b, file, path, isHtml);
  if (ka === 'array') {
    if (a.length !== b.length) return error(file, `${path} has ${b.length} item(s) where English has ${a.length}`);
    return a.forEach((item, i) => compare(item, b[i], file, `${path}[${i}]`));
  }
  if (ka === 'object') {
    for (const key of Object.keys(a)) {
      if (!(key in b)) error(file, `${path ? `${path}.` : ''}${key} is missing`);
      else compare(a[key], b[key], file, path ? `${path}.${key}` : key);
    }
    for (const key of Object.keys(b)) if (!(key in a)) error(file, `${path ? `${path}.` : ''}${key} is not in the English file`);
    return;
  }
  if (ka === 'function') {
    if (a.length !== b.length) error(file, `${path} takes ${b.length} argument(s) where English takes ${a.length}`);
    const samples = SAMPLES[path] ?? [
      Array.from({ length: a.length }, (_, i) => SENTINEL(i)),
      ...COUNTS.map((n) => Array.from({ length: a.length }, () => n)),
    ];
    for (const sample of samples) {
      let ra;
      let rb;
      try {
        ra = a(...sample);
        rb = b(...sample);
      } catch (e) {
        error(file, `${path}(${JSON.stringify(sample)}) throws: ${e.message}`);
        continue;
      }
      if (kind(ra) !== kind(rb)) {
        error(file, `${path}() should return a ${kind(ra)}, but returns a ${kind(rb)}`);
        continue;
      }
      const pairs = Array.isArray(ra) ? ra.map((x, i) => [x, rb[i]]) : [[ra, rb]];
      if (Array.isArray(ra) && ra.length !== rb.length) error(file, `${path}() returns ${rb.length} item(s) where English returns ${ra.length}`);
      for (const [x, y] of pairs) {
        if (typeof y !== 'string') continue;
        compareText(String(x), y, file, `${path}()`, isHtml);
        // Whatever the English sentence shows of its arguments, the translation shows too.
        for (const token of JSON.stringify(sample).match(/⟦\d+⟧/g) ?? []) {
          if (String(x).includes(token) && !y.includes(token)) error(file, `${path}() drops one of its arguments (${JSON.stringify(sample)})`);
        }
      }
    }
  }
}

/* ---------- the Markdown ---------- */

const KINDS = {
  help: { required: ['question', 'summary'], optional: ['updated'], route: 'help' },
  guides: { required: ['title', 'description', 'kicker'], optional: ['updated'], route: 'guides' },
  news: { required: ['title', 'summary'], optional: [], route: 'whats-new' },
};

function markdown(file) {
  const text = readFileSync(file, 'utf8');
  const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return null;
  const front = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^([A-Za-z]+):\s*(.*)$/);
    if (m) front[m[1]] = m[2].trim();
  }
  return { front, body: match[2] };
}
const count = (text, pattern) => (text.match(pattern) ?? []).length;
const links = (text) => [...text.matchAll(/\]\(([^)\s]+)\)/g), ...text.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
const list = (dir) => (existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith('.md')).sort() : []);

function checkContent() {
  const packs = JSON.parse(readFileSync(join(ROOT, 'src/data/packs.json'), 'utf8')).map((p) => p.id);
  const originals = Object.fromEntries(Object.keys(KINDS).map((k) => [k, list(join(ROOT, 'src/content', k))]));
  // Every address a page may link to, without its language.
  const routes = new Set(['/', '/help/', '/guides/', '/packs/', '/styles/', '/whats-new/', '/press/', '/support/', '/privacy/']);
  for (const [k, files] of Object.entries(originals)) for (const f of files) routes.add(`/${KINDS[k].route}/${f.slice(0, -3)}/`);
  for (const id of packs) routes.add(`/packs/${id}/`);

  const i18n = join(ROOT, 'src/content/i18n');
  const folders = existsSync(i18n) ? readdirSync(i18n).filter((f) => statSync(join(i18n, f)).isDirectory()) : [];
  for (const folder of folders) if (!others.some((l) => l.code === folder)) error(`src/content/i18n/${folder}`, 'is not a language of the site');

  for (const locale of others) {
    const missing = [];
    for (const [k, spec] of Object.entries(KINDS)) {
      const dir = join(i18n, locale.code, k);
      const translated = list(dir);
      for (const f of translated) if (!originals[k].includes(f)) error(relative(ROOT, join(dir, f)), 'has no English original of the same name');
      for (const f of originals[k]) {
        const file = join(dir, f);
        const where = relative(ROOT, file);
        if (!translated.includes(f)) {
          missing.push(`${k}/${f}`);
          continue;
        }
        const original = markdown(join(ROOT, 'src/content', k, f));
        const translation = markdown(file);
        if (!translation) {
          error(where, 'has no frontmatter');
          continue;
        }
        for (const key of spec.required) if (!translation.front[key] || /^(""|'')?$/.test(translation.front[key])) error(where, `frontmatter needs "${key}"`);
        for (const key of Object.keys(translation.front)) {
          if (![...spec.required, ...spec.optional].includes(key)) error(where, `frontmatter has "${key}", which only the English file may set`);
        }
        for (const key of spec.required) {
          if (translation.front[key] && translation.front[key] === original.front[key]) warn(where, `"${key}" is the same as the English`);
        }
        const same = (label, pattern) => {
          const a = count(original.body, pattern);
          const b = count(translation.body, pattern);
          if (a !== b) warn(where, `${b} ${label} where English has ${a}`);
        };
        same('headings', /^## /gm);
        same('step lists', /<ol class="steps">/g);
        same('list items', /<li>|^[-*] |^\d+\. /gm);
        same('paragraph breaks', /\n\n(?=\S)/g);
        // Links: the same destinations as the English, each inside this language.
        const want = links(original.body)
          .map((href) => (href.startsWith('/') ? `/${locale.code}${href}` : href))
          .sort();
        const have = links(translation.body).sort();
        for (const href of have) {
          if (!href.startsWith('/')) continue;
          const [path] = href.split('#');
          if (!path.startsWith(`/${locale.code}/`)) error(where, `links to ${href}, outside /${locale.code}/`);
          else if (!routes.has(path.slice(locale.code.length + 1))) error(where, `links to ${href}, which does not exist`);
        }
        if (JSON.stringify(want) !== JSON.stringify(have)) warn(where, `links differ from the English: have ${have.join(' ') || 'none'}, want ${want.join(' ') || 'none'}`);
        if (translation.body.trim().length < original.body.trim().length * 0.25) warn(where, 'is much shorter than the English');
      }
    }
    if (missing.length) {
      const what = `${missing.length} page(s) not translated yet: ${missing.slice(0, 6).join(', ')}${missing.length > 6 ? ' …' : ''}`;
      (strict ? error : warn)(`src/content/i18n/${locale.code}`, what);
    }
  }
}

/* ---------- the built site ---------- */

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const file = join(dir, name);
    if (statSync(file).isDirectory()) walk(file, out);
    else if (name.endsWith('.html')) out.push(file);
  }
  return out;
}

function checkDist() {
  const dist = join(ROOT, 'dist');
  if (!existsSync(dist)) return error('dist', 'not built: run `npm run build` first');
  const site = 'https://companionswidgetpets.github.io';
  const published = new Set(locales.filter((l) => existsSync(join(dist, l.code)) || l.code === defaultLocale).map((l) => l.code));
  const pages = new Map();
  for (const file of walk(dist)) {
    const rel = `/${relative(dist, file)}`.replace(/index\.html$/, '');
    pages.set(rel, readFileSync(file, 'utf8'));
  }
  const exists = (path) => pages.has(path) || existsSync(join(dist, path));
  const localeOf = (path) => others.find((l) => path.startsWith(`/${l.code}/`)) ?? locales.find((l) => l.code === defaultLocale);
  const alternatesOf = (html) => Object.fromEntries([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]));

  for (const [path, html] of pages) {
    const locale = localeOf(path);
    const lang = html.match(/<html lang="([^"]+)"/)?.[1];
    if (lang !== locale.lang) error(path, `<html lang> is "${lang}", expected "${locale.lang}"`);
    const noindex = /<meta name="robots" content="noindex/.test(html);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    if (!noindex && canonical !== site + path) error(path, `canonical is ${canonical}`);
    if (!/<title>[^<]+<\/title>/.test(html)) error(path, 'has no title');
    if (!/<meta name="description" content="[^"]+"/.test(html)) error(path, 'has no description');

    if (!noindex) {
      const alternates = alternatesOf(html);
      if (alternates[locale.hreflang] !== site + path) error(path, `does not name itself as hreflang="${locale.hreflang}"`);
      if (!alternates['x-default']) error(path, 'has no x-default alternate');
      for (const [hreflang, href] of Object.entries(alternates)) {
        const target = href.replace(site, '');
        const other = pages.get(target);
        if (!other) {
          error(path, `hreflang="${hreflang}" points at ${target}, which was not built`);
          continue;
        }
        // Search engines ignore an hreflang link that the other page does not return.
        if (hreflang !== 'x-default' && alternatesOf(other)[locale.hreflang] !== site + path) error(path, `${target} does not link back as hreflang="${locale.hreflang}"`);
      }
      for (const l of locales) {
        if (!published.has(l.code)) continue;
        const twin = l.code === defaultLocale ? path.replace(new RegExp(`^/${locale.code}/`), '/') : `/${l.code}${path.replace(new RegExp(`^/${locale.code}/`), '/')}`;
        if (pages.has(twin) && !alternates[l.hreflang]) error(path, `is missing hreflang="${l.hreflang}" although ${twin} exists`);
      }
    }

    // Every internal link leads somewhere, and stays in the page's language. The language
    // menu (links carrying hreflang) is the one place that leaves it.
    for (const [tag, href] of [...html.matchAll(/<a\b[^>]*?href="([^"#?]*)[^"]*"[^>]*>/g)].map((m) => [m[0], m[1]])) {
      if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/_astro/')) continue;
      if (!exists(href)) error(path, `links to ${href}, which was not built`);
      else if (!/hreflang=/.test(tag) && localeOf(href).code !== locale.code && pages.has(href)) error(path, `links to ${href}, in another language`);
    }
  }

  // The sitemap lists every indexable page, each with its translations.
  const sitemap = existsSync(join(dist, 'sitemap-0.xml')) ? readFileSync(join(dist, 'sitemap-0.xml'), 'utf8') : '';
  for (const [path, html] of pages) {
    const noindex = /<meta name="robots" content="noindex/.test(html);
    const listed = sitemap.includes(`<loc>${site}${path}</loc>`);
    if (!noindex && !listed) error(path, 'is not in the sitemap');
    if (noindex && listed) error(path, 'is in the sitemap but not indexable');
  }
  console.log(`check-i18n: ${pages.size} pages in ${published.size} language(s)`);
}

/* ---------- go ---------- */

if (args.has('--dist')) checkDist();
else await checkSource();

// Draft dictionaries are checked above, but cannot affect the published site.
// Strict validation remains the gate for finishing and publishing a translation.
if (!strict && !args.has('--dist')) {
  for (let i = errors.length - 1; i >= 0; i--) {
    if (drafts.some((code) => errors[i].startsWith(`src/i18n/${code}.ts:`) || errors[i].startsWith(`src/content/i18n/${code}/`) || errors[i].startsWith(`src/content/i18n/${code}:`))) {
      warnings.push(`unpublished draft: ${errors.splice(i, 1)[0]}`);
    }
  }
}

for (const line of warnings) console.warn(`  warning  ${line}`);
for (const line of errors) console.error(`  ERROR    ${line}`);
console.log(`check-i18n: ${errors.length} error(s), ${warnings.length} warning(s)`);
process.exit(errors.length ? 1 : 0);
