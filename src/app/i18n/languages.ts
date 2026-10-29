export const LANGUAGES = ['he', 'en'] as const;

export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = 'he';

export const DIRECTIONS: Record<Language, 'rtl' | 'ltr'> = { he: 'rtl', en: 'ltr' };

/** Open Graph locale of each language. */
export const LOCALES: Record<Language, string> = { he: 'he_IL', en: 'en_US' };

/** URL path of each language's home page. Hebrew is the default and lives at the root. */
export const LANGUAGE_PATHS: Record<Language, string> = { he: '/', en: '/en' };

export const SITE_URL = 'https://axim-anahnu.web.app';
