// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site is published by GitHub Pages at the organisation's user site, so there is no
// base path. If a custom domain is ever added, change `site` here and nothing else: GitHub
// redirects the old github.io addresses to it.
export default defineConfig({
  site: 'https://companionswidgetpets.github.io',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
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
