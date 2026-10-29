import { inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@jsverse/transloco';
import { map } from 'rxjs';
import { Language } from './languages';

/** The active language as a signal. Must be called in an injection context. */
export function injectLanguage(): Signal<Language> {
  const transloco = inject(TranslocoService);
  return toSignal(transloco.langChanges$.pipe(map((lang) => lang as Language)), {
    initialValue: transloco.getActiveLang() as Language,
  });
}
