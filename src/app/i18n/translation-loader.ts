import { Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { Language } from './languages';

const TRANSLATIONS: Record<Language, () => Promise<{ default: Translation }>> = {
  he: () => import('../../i18n/he.json'),
  en: () => import('../../i18n/en.json'),
};

/**
 * Bundles the translation files instead of fetching them over HTTP,
 * so prerendering and the browser read the same content without a server.
 */
@Injectable({ providedIn: 'root' })
export class TranslationLoader implements TranslocoLoader {
  async getTranslation(lang: string): Promise<Translation> {
    const load = TRANSLATIONS[lang as Language];
    if (!load) {
      throw new Error(`Unsupported language: ${lang}`);
    }
    return (await load()).default;
  }
}
