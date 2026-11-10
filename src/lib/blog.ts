/**
 * The blog's topics and the small sums its pages share. Nothing here reads the content
 * collections (src/lib/content.ts does that), so src/content.config.ts can import it too.
 */

/** The blog's topics, in the order the blog's page lists them. Their names and the line
 *  under each heading are in src/i18n/<language>.ts, under `blog.categories`. */
export const blogCategories = ['app-picks', 'home-screen', 'fish', 'guides', 'troubleshooting'] as const;
export type BlogCategory = (typeof blogCategories)[number];

/**
 * The questions a post closes with, for its FAQPage structured data. By convention a post
 * ends with a section of questions people ask: a last `##` heading followed by `###`
 * questions, each answered by the text under it. Read from the rendered HTML, so it works
 * the same in every language; a post that doesn't end that way has none.
 */
export function closingQuestions(html: string | undefined): { question: string; answer: string }[] {
  if (!html) return [];
  const lastSection = html.slice(html.lastIndexOf('<h2'));
  const text = (part: string) =>
    part
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;|&#160;/g, ' ')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;|&#34;/g, '"')
      .replace(/&#39;|&#x27;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ')
      .trim();
  const parts = lastSection.split(/<h3\b[^>]*>/).slice(1);
  const out = parts
    .map((part) => {
      const [question, answer = ''] = part.split('</h3>');
      return { question: text(question), answer: text(answer) };
    })
    .filter((q) => q.question && q.answer);
  return out.length >= 2 ? out : [];
}

/** Scripts read a character at a time rather than a word at a time. */
const ideographs = /[぀-ヿ㐀-䶿一-鿿豈-﫿]/g;

/**
 * About how many minutes a post takes to read, from its Markdown: words at 220 a minute,
 * and Chinese and Japanese characters at 450 a minute, so a post and its translations come
 * out at much the same time.
 */
export function readingMinutes(markdown: string | undefined): number {
  const text = (markdown ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\]\([^)]*\)/g, ']')
    .replace(/[#*_`>|[\]-]/g, ' ');
  const characters = (text.match(ideographs) ?? []).length;
  const words = (text.replace(ideographs, ' ').match(/[\p{L}\p{N}]+/gu) ?? []).length;
  return Math.max(1, Math.round(words / 220 + characters / 450));
}
