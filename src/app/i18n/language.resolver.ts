import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { firstValueFrom } from 'rxjs';
import { DocumentHead } from './document-head';
import { Language } from './languages';

/**
 * Activates the route's language (`data.lang`) and waits for its translations,
 * so prerendered pages are written with the right text, lang and dir.
 */
export const languageResolver: ResolveFn<Language> = async (route) => {
  const lang: Language = route.data['lang'];
  const transloco = inject(TranslocoService);
  const documentHead = inject(DocumentHead);
  await firstValueFrom(transloco.load(lang));
  transloco.setActiveLang(lang);
  documentHead.update(lang);
  return lang;
};
