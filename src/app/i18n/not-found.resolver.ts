import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { firstValueFrom } from 'rxjs';
import { DocumentHead } from './document-head';
import { LANGUAGES } from './languages';

/** The 404 page shows both languages, so both translations must be ready before it renders. */
export const notFoundResolver: ResolveFn<boolean> = async () => {
  const transloco = inject(TranslocoService);
  const documentHead = inject(DocumentHead);
  await Promise.all(LANGUAGES.map((lang) => firstValueFrom(transloco.load(lang))));
  transloco.setActiveLang('he');
  documentHead.updateNotFound();
  return true;
};
