/**
 * The words of the site in each language, and what a page needs to speak one: its
 * dictionary, links that stay inside the language, names from the app's data, and dates
 * and lists written the way the language writes them.
 */
import en, { type Dictionary } from './en.ts';
import de from './de.ts';
import es from './es.ts';
import fr from './fr.ts';
import pt from './pt.ts';
import ru from './ru.ts';
import ja from './ja.ts';
import ko from './ko.ts';
import zhHans from './zh-hans.ts';
import zhHant from './zh-hant.ts';
import { currentLocale, getLocale, localePath, type Locale, type LocaleCode } from './locales.ts';

export type { Dictionary };
export * from './locales.ts';

export const dictionaries: Record<LocaleCode, Dictionary> = {
  en,
  de,
  es,
  fr,
  pt,
  ru,
  ja,
  ko,
  'zh-hans': zhHans,
  'zh-hant': zhHant,
};

/** Something from src/data/*.json that the app names in every language. */
type Named = { names: Record<string, string> };

export function formatDate(date: Date | string, lang = 'en'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  // Dates in the content are plain days (2026-11-04), read as midnight UTC, so they are
  // written out in UTC too; otherwise a build west of Greenwich would print the day before.
  return d.toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export function forLocale(locale: Locale) {
  const t = dictionaries[locale.code as LocaleCode];
  return {
    locale,
    /** The dictionary. */
    t,
    /** A site path in this language: l('/help/') is '/ja/help/' on a Japanese page. */
    l: (path: string) => localePath(locale.code, path),
    /** The app's name for a fish, pack, prop or style in this language. */
    name: (thing: Named) => thing.names[locale.data] ?? thing.names.en,
    /** A pack's tagline in this language. */
    tagline: (pack: { taglines: Record<string, string> }) => pack.taglines[locale.data] ?? pack.taglines.en,
    date: (date: Date | string) => formatDate(date, locale.lang),
    list: (items: string[]) => items.join(t.format.listSeparator),
    /** What this language calls another language ("Japanese", "Japanisch", "日本語"). */
    languageName: (lang: string) => {
      const word = new Intl.DisplayNames([locale.lang], { type: 'language' }).of(lang) ?? lang;
      return word.charAt(0).toLocaleUpperCase(locale.lang) + word.slice(1);
    },
  };
}

/** The language of the page at `url`, with everything above. */
export function useLocale(url: URL) {
  return forLocale(currentLocale(url));
}

export function useLocaleCode(code: string) {
  return forLocale(getLocale(code));
}
