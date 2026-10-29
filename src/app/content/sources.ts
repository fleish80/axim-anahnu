import { Language } from '../i18n/languages';

/** Where a quote or fact comes from, so readers can check it themselves. */
export type SourceLink =
  /** A Sefaria reference, e.g. `Yoma.9b`, opened in Hebrew or side by side with English. */
  | { readonly sefaria: string }
  /** Any other page, optionally with a different page per language. */
  | { readonly url: string | Readonly<Record<Language, string>> };

export function sourceUrl(link: SourceLink, lang: Language): string {
  if ('sefaria' in link) {
    return `https://www.sefaria.org/${link.sefaria}?lang=${lang === 'he' ? 'he' : 'bi'}`;
  }
  return typeof link.url === 'string' ? link.url : link.url[lang];
}

/** Sources of the quotes and facts outside the chapters. */
export const SOURCES = {
  genesis: { sefaria: 'Genesis.13.8' },
  deuteronomy: { sefaria: 'Deuteronomy.32.7' },
} as const satisfies Record<string, SourceLink>;
