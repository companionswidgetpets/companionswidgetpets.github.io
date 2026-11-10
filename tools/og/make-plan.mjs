#!/usr/bin/env node
/*
 * Writes tools/og/plan.json: one social preview card per language, for tools/shots.mjs
 * to draw from tools/og/template.html (`npm run og` runs both).
 *
 * The cards' words are the `og` entries of src/i18n/<language>.ts. English is drawn to
 * public/og/default.png, every other language to public/og/<language>.png, which is where
 * Base.astro points each page's og:image.
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');

// Every language, published or still a draft.
process.env.I18N_DRAFTS = '1';
const { locales, defaultLocale } = await import(pathToFileURL(join(root, 'src/i18n/locales.ts')).href);

const shots = [];
for (const locale of locales) {
  const { default: t } = await import(pathToFileURL(join(root, `src/i18n/${locale.code}.ts`)).href);
  // Chinese, Japanese and Korean have no spaces to break a headline at, so their card takes
  // the hero's headline, which carries the line break its writer chose.
  const cjk = /^(ja|ko|zh)/.test(locale.lang);
  const words = { lang: locale.lang, title: cjk ? t.hero.titleHtml : t.og.titleHtml, text: t.og.text, facts: t.og.facts };
  shots.push({
    url: pathToFileURL(join(here, 'template.html')).href,
    out: `public/og/${locale.code === defaultLocale ? 'default' : locale.code}.png`,
    width: 1200,
    height: 630,
    scale: 1,
    reload: true,
    settle: 800,
    wait: 500,
    // The template's own script lays the words out and reports how it went.
    eval: `window.setWords(${JSON.stringify(words)})`,
    probe: `'${locale.code}: ' + window.cardReport()`,
  });
}

writeFileSync(join(here, 'plan.json'), `${JSON.stringify({ shots }, null, 2)}\n`);
console.log(`tools/og/plan.json: ${shots.length} cards`);
