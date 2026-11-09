# Liquid Glass for the Web

The refraction engine (`liquid-glass.js`) and web components (`components.js`) from
<https://liquidglass.dev>, copied here unmodified so the site serves them itself.

- Source: <https://github.com/gentpan/liquidglass>, `lib/`
- Version: 1.0.0, commit `068ad226f53e1ca62d857f78bdc32f58f3c5fce7` (19 September 2026)
- Licence: MIT (`LICENSE`). The toast icons inside `components.js` are from Lucide (ISC).

Nothing in these two files reaches the network or stores anything. They are used from
`src/scripts/glass.js`; the site's README explains how, under "Liquid glass".

To update: replace the two `.js` files with the new ones from `lib/` in the repository,
change the version and commit above, and check the pages in Chrome and Safari.
