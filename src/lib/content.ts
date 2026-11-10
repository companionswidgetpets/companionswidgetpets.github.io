/**
 * Help answers, blog posts and release notes in a given language.
 *
 * The English files under src/content/{help,blog,news}/ are the originals and decide
 * what exists, in what order and under which address. A translation at
 * src/content/i18n/<language>/<kind>/<same name>.md supplies the words. An entry with no
 * translation is left out of that language altogether, so no page is ever published half
 * in English, and the pages tell search engines only about the languages that exist.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLocale, localeCodes, type LocaleCode } from '../i18n/locales.ts';

type Kind = 'help' | 'blog' | 'news';
type Source<K extends Kind> = CollectionEntry<K>;
type Translation<K extends Kind> = CollectionEntry<`${K}I18n`>;

export interface Localized<K extends Kind> {
  /** The file name, which is the address in every language: /help/<id>/, /ja/help/<id>/. */
  id: string;
  /** The English entry's facts with the translation's words laid over them. */
  data: Source<K>['data'];
  /** The entry whose Markdown is this language's text, to hand to `render()`. */
  entry: Source<K> | Translation<K>;
}

async function load<K extends Kind>(kind: K, code: string): Promise<Localized<K>[]> {
  const originals = (await getCollection(kind)) as Source<K>[];
  if (code === defaultLocale) return originals.map((entry) => ({ id: entry.id, data: entry.data, entry }));
  const translated = (await getCollection(`${kind}I18n` as `${K}I18n`)) as Translation<K>[];
  const byId = new Map(translated.map((t) => [t.id, t]));
  const out: Localized<K>[] = [];
  for (const original of originals) {
    const translation = byId.get(`${code}/${kind}/${original.id}`);
    if (!translation) continue;
    const words = Object.fromEntries(Object.entries(translation.data).filter(([, value]) => value !== undefined));
    out.push({ id: original.id, data: { ...original.data, ...words } as Source<K>['data'], entry: translation });
  }
  return out;
}

export const getHelp = (code: string) => load('help', code);
export const getBlog = (code: string) => load('blog', code);
export const getNews = (code: string) => load('news', code);

/** Blog posts in the order their topic lists them: by `order`, then newest first. */
export function sortPosts<T extends Localized<'blog'>>(posts: T[]): T[] {
  return [...posts].sort(
    (a, b) => a.data.order - b.data.order || b.data.published.getTime() - a.data.published.getTime() || a.id.localeCompare(b.id)
  );
}

/**
 * The languages that have a blog: those with at least one post translated. The blog's page,
 * its feed and the links to it exist in these languages only, so no language ever shows an
 * empty blog to readers or search engines.
 */
export async function blogLocales(): Promise<LocaleCode[]> {
  const out: LocaleCode[] = [];
  for (const code of localeCodes) if ((await load('blog', code)).length) out.push(code);
  return out;
}

/** The languages an entry is published in, for the pages' language links. */
export async function localesOf(kind: Kind, id: string): Promise<LocaleCode[]> {
  const out: LocaleCode[] = [];
  for (const code of localeCodes) {
    if ((await load(kind, code)).some((e) => e.id === id)) out.push(code);
  }
  return out;
}

/**
 * `getStaticPaths` for an entry page under `src/pages/[...locale]/`: one path per entry
 * per language it has been translated into.
 */
export async function entryPaths<K extends Kind>(kind: K) {
  const paths = [];
  for (const code of localeCodes) {
    for (const item of await load(kind, code)) {
      paths.push({
        params: { locale: code === defaultLocale ? undefined : code, id: item.id },
        props: { item, locales: await localesOf(kind, item.id) },
      });
    }
  }
  return paths;
}
