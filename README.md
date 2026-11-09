# Companions website

The website for **Companions - Widget Pets**, the aquarium Home Screen widget for iPhone:
<https://companionswidgetpets.github.io>. A static site built with [Astro](https://astro.build),
published free by GitHub Pages, written to be read by people, search engines and AI assistants
alike.

The home page is the design mockup brought to life: the phone stands in the middle with the
fish really swimming in its widget, and as the page scrolls the phone slides right and shrinks
while the headline arrives. Every tank on the site is live, drawn by a port of the app's own
swim pattern, swim areas, prop placement and bubbles (`src/scripts/tank.js`), so the website
shows what the app shows.

## Working on it

Requirements: Node 22.23.4 or newer (`brew upgrade node@22`), and Python 3 for the sync script.

```sh
npm install          # once
npm run dev          # http://localhost:4321, rebuilds as you edit
npm run build        # writes the site to dist/
npm run preview      # serves dist/ the way GitHub Pages will
```

### Where things are

| Path | What |
|---|---|
| `src/pages/` | One file per page or route: `index.astro` (home), `help/`, `guides/`, `packs/`, `styles/`, `whats-new/`, `press/`, `support.astro`, `privacy.astro`, `404.astro` |
| `src/content/help/*.md` | One question and answer per file; the file name is the URL (`/help/<name>/`) |
| `src/content/guides/*.md` | Longer articles (`/guides/<name>/`) |
| `src/content/news/*.md` | Release notes, one per version (`/whats-new/<name>/`) |
| `src/content.config.ts` | The frontmatter each kind of entry must have |
| `src/components/` | `Hero`, `Phone`, `Tank`, `TopBar`, `Footer`, `SizesDemo`, `PackGrid`, `StyleRow`, `Badge` |
| `src/layouts/Base.astro` | The page shell: metadata, Open Graph, JSON-LD, Smart App Banner, fonts |
| `src/scripts/` | `tank.js` (the simulation), `hero.js` (scroll choreography), `site.js` (menu, style picker) |
| `src/styles/global.css` | Design tokens (light and dark), type, buttons, cards, prose |
| `src/data/*.json` | Facts pulled from the app by the sync script, plus `app.json` (hand-kept facts: version, URLs, languages) |
| `src/assets/` | Pictures that go through Astro's image pipeline (fish, props, phone, widget capture, icon, screenshots) |
| `public/` | Served as-is: fonts, `robots.txt`, `llms.txt`, icons, the App Store badge, `og/default.png` |
| `tools/` | `sync-from-app.py`, `footprints.swift`, `shots.mjs` (headless screenshots), `og/` (social card) |

### Writing a help answer

Create `src/content/help/<url-slug>.md`:

```md
---
question: "How do I …?"              # the page title and H1, as people ask it
summary: "One or two sentences that answer it."   # meta description, list text, FAQ schema
category: widgets                     # see content.config.ts for the list
order: 10                             # position within the category
featured: false                       # true puts it on the home page (keep to about eight)
updated: 2026-11-09
related: ["another-help-slug", "/guides/some-guide/"]
---
The full answer in Markdown. Numbered steps can use <ol class="steps"> … </ol>.
```

One question per page, answered in the first two sentences, with facts taken from the app.
Guides and release notes work the same way; their fields are in `src/content.config.ts`.

### Keeping the site true to the app

```sh
npm run sync                                     # app repo at ../companions
python3 tools/sync-from-app.py /path/to/companions
```

This copies every fish and prop picture and reads the app's source for the species, packs
(and which are free), styles and palettes, props (with each picture's opaque footprint, so
props stand where the app stands them) and the Explore page's ready-made tanks, writing
`src/data/*.json`. Run it after adding a fish, a prop or a style to the app, then build.
It asserts the counts it expects (58 species, 12 packs, 8 styles, 20 props) and fails loudly
if the app changes shape.

Hand-kept facts live in `src/data/app.json`: bump `version` and `versionDate` with each release
and add a release note under `src/content/news/`.

### Checking the pages

```sh
npm run build && npm run preview &
node tools/shots.mjs tools/shots.plan.json      # screenshots + any JavaScript errors
npm run og                                      # re-render public/og/default.png from tools/og/template.html
```

`tools/shots.mjs` drives the Google Chrome on this Mac headless, with no dependencies.

## Publishing

The site publishes itself from GitHub: `.github/workflows/deploy.yml` builds on every push to
`main` and deploys to GitHub Pages. Nothing is hosted anywhere else and nothing costs money.

First time only:

1. Create the GitHub organisation **companionswidgetpets** (free) and in it a public repository
   named exactly **companionswidgetpets.github.io**.
2. Push this folder to it (`git remote add origin git@github.com:companionswidgetpets/companionswidgetpets.github.io.git`,
   `git push -u origin main`).
3. In the repository: **Settings › Pages › Build and deployment › Source: GitHub Actions**.
4. Wait for the Actions run to finish; the site is live at <https://companionswidgetpets.github.io>.

Afterwards, every push to `main` republishes within a couple of minutes.

## Search and AI

- `robots.txt` welcomes every search and AI crawler by name; `llms.txt` summarises the site.
- Every page has a canonical URL, Open Graph and Twitter tags, and JSON-LD: `WebSite`,
  `Person` (developer) and, on the home page, `SoftwareApplication`; `FAQPage` on help pages,
  `TechArticle` on guides and release notes, `BreadcrumbList` everywhere, `ItemList` on packs.
- The sitemap is at `/sitemap-index.xml`. Submit the site once to
  [Google Search Console](https://search.google.com/search-console) and
  [Bing Webmaster Tools](https://www.bing.com/webmasters) (Bing feeds ChatGPT and Copilot).
- The home page's `<head>` carries the Smart App Banner (`apple-itunes-app`), so Safari on
  iPhone offers the app.

## Still to do

- Prices are described but not quoted; add them once the words "from $…" are wanted.
- Only version 4.5 has a release note. Older notes are in App Store Connect and can be pasted
  into `src/content/news/`.
- App Store links carry no campaign token. Add `?pt=<provider>&ct=website&mt=8` to
  `appStoreUrl` in `src/data/app.json` to see the site's installs in App Analytics.
- The site is English only. Fish, pack, prop and style names are already in all twelve
  languages in `src/data/`, ready for translated pages.
- An RSS feed for What's new, and the promo video on the home page.

## Licences and credits

Plus Jakarta Sans is used under the SIL Open Font License (`public/fonts/PlusJakartaSans-OFL.txt`).
The App Store badge is Apple's, used as Apple's guidelines allow, to link to the app. The
phone bezel and Home Screen pictures are the ones made for the promo film.
