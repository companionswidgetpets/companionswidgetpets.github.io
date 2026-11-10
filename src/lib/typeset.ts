/**
 * Typography for text the site takes as it is from elsewhere: the privacy policy, which is
 * the app's own wording, word for word. The words are never touched; only the spaces and
 * apostrophes are set the way the rest of the site sets them in that language, so a line
 * never starts with a lone colon or dash.
 *
 * Works on HTML, changing text between tags only.
 */
const NBSP = ' ';

const rules: Record<string, [RegExp, string][]> = {
  // French: a no-break space before : ; ! ? and inside « », and the curly apostrophe.
  fr: [
    [/[  ]([:;!?»])/g, `${NBSP}$1`],
    [/«[  ]/g, `«${NBSP}`],
    [/'/g, '’'],
  ],
  // Russian: the dash never starts a line.
  ru: [[/ —/g, `${NBSP}—`]],
};

export function typeset(html: string, lang: string): string {
  const own = rules[lang.split('-')[0]];
  if (!own) return html;
  return html
    .split(/(<[^>]*>)/)
    .map((part) => (part.startsWith('<') ? part : own.reduce((text, [pattern, replacement]) => text.replace(pattern, replacement), part)))
    .join('');
}
