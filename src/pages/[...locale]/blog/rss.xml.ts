/**
 * The blog as an RSS feed, one per language (/blog/rss.xml, /ja/blog/rss.xml), for feed
 * readers and for search engines, which read feeds to find new posts quickly.
 */
import type { APIRoute } from 'astro';
import { blogLocales, getBlog } from '../../../lib/content';
import { absolute } from '../../../lib/site';
import { forLocale, getLocale, localeParam } from '../../../i18n/index.ts';

// A feed for each language that has a blog (see blogLocales).
export async function getStaticPaths() {
  return (await blogLocales()).map((code) => ({ params: { locale: localeParam(code) } }));
}

const escape = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ params }) => {
  const { locale, t, l } = forLocale(getLocale(params.locale));
  const posts = (await getBlog(locale.code)).sort(
    (a, b) => (b.data.updated ?? b.data.published).getTime() - (a.data.updated ?? a.data.published).getTime() || a.data.order - b.data.order
  );
  const items = posts.map((p) => {
    const url = absolute(l(`/blog/${p.id}/`));
    return [
      '<item>',
      `<title>${escape(p.data.title)}</title>`,
      `<link>${url}</link>`,
      `<guid isPermaLink="true">${url}</guid>`,
      `<pubDate>${p.data.published.toUTCString()}</pubDate>`,
      `<category>${escape(t.blog.categories[p.data.category].name)}</category>`,
      `<description>${escape(p.data.description)}</description>`,
      '</item>',
    ].join('');
  });
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '<channel>',
    `<title>${escape(t.blog.feedTitle)}</title>`,
    `<link>${absolute(l('/blog/'))}</link>`,
    `<atom:link href="${absolute(l('/blog/rss.xml'))}" rel="self" type="application/rss+xml"/>`,
    `<description>${escape(t.blog.description)}</description>`,
    `<language>${locale.lang}</language>`,
    ...items,
    '</channel>',
    '</rss>',
  ].join('\n');
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
