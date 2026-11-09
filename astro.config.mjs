// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { locales, defaultLocale } from './src/i18n/locales.ts';

const site = 'https://companionswidgetpets.github.io';

// The languages the site is written in live in src/i18n/locales.ts. English is at the root
// (/help/); each other language is under its own folder (/ja/help/).
const others = locales.filter((l) => l.code !== defaultLocale);

// The site is published by GitHub Pages at the organisation's user site, so there is no
// base path. If a custom domain is ever added, change `site` here and nothing else: GitHub
// redirects the old github.io addresses to it.
export default defineConfig({
  site,
  i18n: {
    defaultLocale,
    // A language whose folder and language tag are spelled differently (zh-hans, zh-Hans)
    // is given as both.
    locales: locales.map((l) => (l.code === l.lang ? l.code : { path: l.code, codes: [l.lang] })),
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      // Each page is listed with the same page in every other language (hreflang), which
      // is how search engines learn to show a reader the page in their own language.
      i18n: {
        defaultLocale,
        locales: Object.fromEntries(locales.map((l) => [l.code, l.hreflang])),
      },
      // The "not found" pages are not for search engines. And every set of translations
      // names its English page as the one for readers of any other language (x-default).
      filter: (page) => !others.some((l) => page === `${site}/${l.code}/404/`),
      serialize(item) {
        const english = item.links?.find((link) => link.lang === 'en');
        if (english && !item.links?.some((link) => link.lang === 'x-default')) {
          item.links?.push({ lang: 'x-default', url: english.url });
        }
        return item;
      },
    }),
  ],
  build: {
    // Every page is a folder with an index.html, so URLs end in a slash and GitHub Pages
    // serves them without redirects.
    format: 'directory',
  },
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
