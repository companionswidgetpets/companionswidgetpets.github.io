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
| `src/pages/[...locale]/` | One file per page or route, each built once per language: `index.astro` (home), `help/`, `guides/`, `packs/`, `styles/`, `whats-new/`, `press/`, `support.astro`, `privacy.astro`. `src/pages/404.astro` is the one page outside it |
| `src/i18n/` | The languages (`locales.ts`) and every word of the pages and components: `en.ts` is the original, with one file of the same shape per language (see "Languages" below) |
| `src/content/help/*.md` | One question and answer per file, in English; the file name is the URL (`/help/<name>/`) |
| `src/content/guides/*.md` | Longer articles (`/guides/<name>/`) |
| `src/content/news/*.md` | Release notes, one per version (`/whats-new/<name>/`) |
| `src/content/i18n/<language>/` | The translations of those three folders, file for file |
| `src/content.config.ts` | The frontmatter each kind of entry must have |
| `src/lib/content.ts` | Gives a page its help answers, guides and release notes in its own language |
| `src/components/` | `Hero`, `Phone`, `Tank`, `TopBar`, `Footer`, `SizesDemo`, `PackGrid`, `StyleRow`, `Badge`, `Analytics` |
| `src/layouts/Base.astro` | The page shell: metadata, Open Graph, JSON-LD, Smart App Banner, fonts |
| `src/scripts/` | `tank.js` (the simulation), `hero.js` (scroll choreography), `site.js` (menu, style picker), `glass.js` (what is glass, and how much each browser gets), `analytics.js` (visitor statistics) |
| `src/styles/global.css` | Design tokens (light only, like the app), the title faces, buttons, cards, prose |
| `src/styles/glass.css` | The water behind the pages, and the glass look of the top bar, buttons and containers |
| `src/vendor/liquid-glass/` | The Liquid Glass for the Web library, unmodified (see "Liquid glass" below) |
| `src/data/*.json` | Facts pulled from the app by the sync script, plus `app.json` (hand-kept facts: version, URLs, languages) |
| `src/assets/` | Pictures that go through Astro's image pipeline (fish, props, phone, widget capture, icon, screenshots) |
| `public/` | Served as-is: fonts, `robots.txt`, `llms.txt`, icons, `og/` (the social card in each language) |
| `tools/` | `sync-from-app.py`, `footprints.swift`, `check-i18n.mjs` (checks the translations), `shots.mjs` (headless screenshots), `og/` (social cards, one per language) |

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

A new answer is published in English at once. It appears in another language when
`src/content/i18n/<language>/help/<same-slug>.md` exists (see "Languages"); until then that
language simply does not have the page, and `npm run check:i18n` lists what is waiting.

### Languages

The site is published in ten languages: English at the root (`/help/`), and German, Spanish,
French, Portuguese, Russian, Japanese, Korean, Simplified Chinese and Traditional Chinese
each under its own folder (`/de/help/`, `/ja/help/`, `/zh-hans/help/` …). The addresses are the
same in every language apart from that folder.

Words come from three places:

| What | Where | Notes |
|---|---|---|
| Fish, pack, prop and style names | `src/data/*.json` | Pulled from the app by `npm run sync`, in all of the app's languages |
| Pages and components | `src/i18n/<language>.ts` | Exactly the shape of `en.ts`. A sentence that varies with a count or a name is a function, so each language orders its words and chooses its plurals itself |
| Help answers, guides, release notes | `src/content/i18n/<language>/{help,guides,news}/<slug>.md` | Frontmatter holds only the words (`question` and `summary`; `title`, `description` and `kicker`; `title` and `summary`). Order, category, dates and related links are read from the English file. Links into the site carry the language's folder (`/ja/help/battery/`) |

Three rules keep the translations right:

- **The app's words are the site's words.** A button, menu or page of the app is written exactly
  as the app shows it in that language (`Localizable.xcstrings` in the app repo), and iOS's own
  labels as Apple writes them. The privacy policy is the app's translated policy, word for word.
- **A page is published in a language only when it has been translated.** There is never an
  English page under another language's address.
- **`npm run check:i18n`** compares every language with the English: the same entries in
  `src/i18n/`, the same headings, steps and links in each Markdown page, and no link that
  leaves its language. `npm run build` runs it first and stops if it finds an error.
  `npm run check:i18n -- --strict` also fails on pages still waiting for a translation, and
  `node tools/check-i18n.mjs --dist` checks the built site (language tags, canonical and
  hreflang links both ways, the sitemap, every internal link).

After changing English text, change it in each language too: for `en.ts` the check fails
until every language has the entry; for a Markdown page the translation is yours to keep in
step.

To add a language: add it to `src/i18n/locales.ts` (and to `drafts` there, which keeps it off
the published site while it is being written; `I18N_DRAFTS=1 npm run dev` shows drafts),
write `src/i18n/<code>.ts` and register it in `src/i18n/index.ts`, translate
`src/content/i18n/<code>/`, add Apple's badge in that language as
`src/assets/badge/app-store-badge-<code>.svg`, run `npm run og` for its social card, and take
it off `drafts` when `npm run check:i18n -- --strict` passes.

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

### Liquid glass

The top bar, the buttons, the chips and the containers (cards, the question list, a guide's
contents box) are liquid glass, drawn by [Liquid Glass for the Web](https://liquidglass.dev)
(`src/vendor/liquid-glass/`). The pages themselves stay plain HTML: `src/scripts/glass.js`
slips one of the library's `<lg-panel>` elements behind each of those elements as its body,
and turns the top bar's links into the library's `<lg-navbar>`. Until an element has a body,
and wherever it never gets one, it wears the frosted stand-in from `src/styles/glass.css`.

How much glass a visitor gets is decided once per page load (`MODE` in `glass.js`, also set
as `data-glass-mode` on `<html>`):

| Mode | Who | What they see |
| --- | --- | --- |
| `refract` | Chrome and Edge on a computer | Everything bends light. The top bar refracts the page scrolling under it |
| `frost` | Safari and Firefox, so every iPhone and iPad | The library's frosted glass: blur, tint and rim, with the same springy press and sliding lens |
| `none` | Reduce Transparency, Increase Contrast, forced colours, Chrome on a phone, no JavaScript | The stand-ins, solid where transparency is unwanted |

Safari is on `frost` for two reasons. It cannot refract a live page at all, and when it
refracts a copy of the background instead, each element stalls the page as it appears: about
60 ms for a button and up to half a second for a card, which took scrolling on the home page
from 60 frames a second to 14. Measure again before changing that.

To make something else glass, add its selector to `TARGETS` in `glass.js` as a `bar`,
`button` or `panel`, and give it `--lg-tint`, `--glass-rim` and `--lg-shadow-2` in
`glass.css`, as the others have. The glass refracts the background of `<main>` (the water in
`glass.css`), so anything that paints its own background behind glass belongs in `ISLANDS`.

To update the library, replace `liquid-glass.js` and `components.js` in
`src/vendor/liquid-glass/` with the new ones from its repository and note the commit in the
README there. `glass.js` relies on `<lg-panel>` keeping its glass in a `surface` property,
and on `<lg-navbar>` having `moveTo()`.

### Checking the pages

```sh
npm run build && npm run preview &
node tools/shots.mjs tools/shots.plan.json      # screenshots + any JavaScript errors
npm run check:i18n                              # the translations against the English
node tools/check-i18n.mjs --dist                # the built site: hreflang, canonical, sitemap, links
npm run og                                      # re-draw public/og/*.png, one card per language
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
- Every page names itself and its translations with `hreflang` links (and `x-default`, the
  English page), in its `<head>` and again in the sitemap, so a search engine shows each reader
  the page in their own language. Each language's pages have their own `<html lang>`, title,
  description, `og:locale`, social card and structured data, and link only to pages in the same
  language; the language menu in the footer is the one place that crosses over.
- The sitemap is at `/sitemap-index.xml`. Submit the site once to
  [Google Search Console](https://search.google.com/search-console) and
  [Bing Webmaster Tools](https://www.bing.com/webmasters) (Bing feeds ChatGPT and Copilot).
  Search Console shows which Google searches lead here. To prove the site is yours, add it
  there as a **URL prefix** property, choose the **HTML tag** method, and put the tag's
  `content` value in `googleSiteVerification` in `src/data/app.json`; push, wait for the
  site to republish, then press Verify.
- The home page's `<head>` carries the Smart App Banner (`apple-itunes-app`), so Safari on
  iPhone offers the app.

## Visitor statistics

The site can count its visitors with Google Analytics 4: how many there are, where they
come from and which links and buttons they press. It is off until `googleAnalyticsId` in
`src/data/app.json` is filled in, and until then no page carries any of it.

To turn it on:

1. At <https://analytics.google.com> create an account and a property, then a **Web** data
   stream for `https://companionswidgetpets.github.io`. Leave Enhanced measurement on.
2. Copy the stream's **Measurement ID** (`G-XXXXXXXXXX`) into `googleAnalyticsId` and push.
3. Open the live site and look at **Reports › Realtime** in Google Analytics: the visit
   should be there within a minute.
4. Once `app_store_click` is listed under **Admin › Data display › Events** (up to a day
   after the first one), mark it as a key event, so that presses of the App Store buttons
   are counted as what the site is for.

Where the answers are in Google Analytics:

| Question | Where |
|---|---|
| How many people visit, and which pages | Reports › Engagement › Pages and screens |
| Which countries and cities | Reports › User attributes › Demographic details |
| Which sites and searches send them | Reports › Acquisition › Traffic acquisition |
| How often each kind of button is pressed | Reports › Engagement › Events |
| Which button, and where on the page | Explore › Free form, with rows *Event name*, *Link text* and *Content type* and the value *Event count* |

`src/scripts/analytics.js` sends three events of its own, for every link, button and
question on the site, so new ones are counted without being marked up:

| Event | Sent for |
|---|---|
| `app_store_click` | a link to the App Store |
| `email_click` | an email link |
| `button_click` | every other link and button, and a question being opened |

Each carries *Link text* (the button's label), *Link URL* (where it leads; not for email) and
*Content type* (the part of the page: `top bar`, `hero`, `footer`, a home page section such as
`fish` or `questions`, or `page`). Page views, and Google's own `click` for links that leave
the site, come from Enhanced measurement. Safari's Smart App Banner is the browser's own, so
taps on it cannot be counted.

Who is counted:

- Google Analytics sets cookies, so visitors whose browser is in a European time zone (the
  EEA, the United Kingdom and Switzerland) are asked first, in a bar at the foot of the
  window, and nothing is loaded from Google unless they allow it. Visitors elsewhere are
  counted without being asked.
- A browser that sends Global Privacy Control or Do Not Track is neither counted nor asked.
- Anyone can change their mind with the switch under "This website" on the privacy page.
  That section describes all this, and writes itself according to whether
  `googleAnalyticsId` is set; revise `websiteUpdated` in `privacy.astro` if its words change.
- Crawlers and automated browsers (`tools/shots.mjs` among them) are never counted. Nor is a
  local preview: on `localhost` nothing is fetched from Google, and what would have been sent
  is printed to the browser's console at its Verbose level. To see the bar there, set a
  European location in Chrome's DevTools (More tools › Sensors).

## Still to do

- Prices are described but not quoted; add them once the words "from $…" are wanted.
- Only version 4.5 has a release note. Older notes are in App Store Connect and can be pasted
  into `src/content/news/`.
- App Store links carry no campaign token. Add `?pt=<provider>&ct=website&mt=8` to
  `appStoreUrl` in `src/data/app.json` to see the site's installs in App Analytics.
- The app also speaks Arabic and Italian, which the site does not yet (Arabic needs the
  layout mirrored right to left).
- In App Store Connect, each language's Marketing URL, Support URL and Privacy Policy URL can
  point at that language's pages (`/ja/`, `/ja/support/`, `/ja/privacy/`), so someone coming
  from the Japanese App Store lands on the Japanese site.
- Search engines other than Google and Bing matter in three of the languages: register the
  site with [Naver Search Advisor](https://searchadvisor.naver.com) (Korean),
  [Yandex Webmaster](https://webmaster.yandex.com) (Russian) and, if mainland China matters,
  [Baidu](https://ziyuan.baidu.com), each of which takes the same sitemap.
- The App Store screenshots in the press kit are the English ones in every language.
- An RSS feed for What's new, and the promo video on the home page.

## Licences and credits

Titles are set in SF Pro at the promo films' custom width and weight, reached as the system
font (see "Titles" in `src/styles/global.css`), so they appear on Apple devices only. SF Pro
may not be served as a web font under Apple's licence, so elsewhere Plus Jakarta Sans stands in,
used under the SIL Open Font License (`public/fonts/PlusJakartaSans-OFL.txt`).
The App Store badge is Apple's, used as Apple's guidelines allow, to link to the app. The
phone bezel and Home Screen pictures are the ones made for the promo film.
The glass is [Liquid Glass for the Web](https://github.com/gentpan/liquidglass) by gentpan,
used under the MIT licence (`src/vendor/liquid-glass/LICENSE`).
