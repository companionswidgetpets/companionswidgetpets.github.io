/**
 * The languages the website is published in, and the helpers that turn a language and a
 * path into a URL.
 *
 * English lives at the root (/help/); every other language lives under its own folder
 * (/ja/help/). To add a language: add it here, add `src/i18n/<code>.ts`, register that file
 * in `src/i18n/index.ts`, add `src/content/i18n/<code>/`, and list it in astro.config.mjs.
 */

export interface Locale {
  /** The folder the language's pages live under, and its name everywhere in the code. */
  code: string;
  /** BCP 47 tag for `<html lang>` and for formatting dates. */
  lang: string;
  /** The value search engines are told in `hreflang`: the language, without a country,
      so one set of pages serves every country that speaks it. */
  hreflang: string;
  /** The key of this language in the names pulled from the app (src/data/*.json). */
  data: string;
  /** Open Graph locale, for link previews. */
  og: string;
  /** The language's own name for itself, as shown in the language menu. */
  name: string;
}

export const locales = [
  { code: 'en', lang: 'en', hreflang: 'en', data: 'en', og: 'en_US', name: 'English' },
  { code: 'de', lang: 'de', hreflang: 'de', data: 'de', og: 'de_DE', name: 'Deutsch' },
  { code: 'es', lang: 'es', hreflang: 'es', data: 'es', og: 'es_LA', name: 'Español' },
  { code: 'fr', lang: 'fr', hreflang: 'fr', data: 'fr', og: 'fr_FR', name: 'Français' },
  { code: 'pt', lang: 'pt-BR', hreflang: 'pt', data: 'pt', og: 'pt_BR', name: 'Português' },
  { code: 'ru', lang: 'ru', hreflang: 'ru', data: 'ru', og: 'ru_RU', name: 'Русский' },
  { code: 'ja', lang: 'ja', hreflang: 'ja', data: 'ja', og: 'ja_JP', name: '日本語' },
  { code: 'ko', lang: 'ko', hreflang: 'ko', data: 'ko', og: 'ko_KR', name: '한국어' },
  { code: 'zh-hans', lang: 'zh-Hans', hreflang: 'zh-Hans', data: 'zh-Hans', og: 'zh_CN', name: '简体中文' },
  { code: 'zh-hant', lang: 'zh-Hant', hreflang: 'zh-Hant', data: 'zh-Hant', og: 'zh_TW', name: '繁體中文' },
] as const satisfies readonly Locale[];

export type LocaleCode = (typeof locales)[number]['code'];

export const defaultLocale: LocaleCode = 'en';
export const localeCodes = locales.map((l) => l.code) as LocaleCode[];
export const translatedCodes = localeCodes.filter((c) => c !== defaultLocale);

export function getLocale(code: string | undefined): Locale {
  const found = locales.find((l) => l.code === (code ?? defaultLocale));
  if (!found) throw new Error(`Unknown language "${code}"`);
  return found;
}

/** The site path of `path` (such as "/help/") in a language: "/help/" or "/ja/help/". */
export function localePath(code: string, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return code === defaultLocale ? clean : `/${code}${clean}`;
}

/** Splits a URL path into its language and the path every language shares. */
export function splitLocale(pathname: string): { code: LocaleCode; path: string } {
  const [, first, ...rest] = pathname.split('/');
  const code = translatedCodes.find((c) => c === first);
  return code ? { code, path: `/${rest.join('/')}` } : { code: defaultLocale, path: pathname };
}

/** The language of the page being built, read from its URL. */
export function currentLocale(url: URL): Locale {
  return getLocale(splitLocale(url.pathname).code);
}

/**
 * `getStaticPaths` for a page under `src/pages/[...locale]/` that exists in every language:
 * one path with no prefix for English, and one per other language.
 */
export function localePaths() {
  return localeCodes.map((code) => ({ params: { locale: code === defaultLocale ? undefined : code } }));
}

/** The `locale` route parameter for a language: nothing for English, its folder otherwise. */
export function localeParam(code: string): string | undefined {
  return code === defaultLocale ? undefined : code;
}
