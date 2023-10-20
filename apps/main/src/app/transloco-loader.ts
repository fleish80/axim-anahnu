import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENVIRONMENT } from '@axim-anahnu/common/environment';
import { Translation, TranslocoLoader } from '@ngneat/transloco';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  #http = inject(HttpClient);
  #environment = inject(ENVIRONMENT);

  getTranslation(lang: string) {
    return this.#http.get<Translation>(
      `${this.#environment.baseUrl}/i18n/${lang}.json`
    );
  }
}
