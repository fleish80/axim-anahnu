import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENVIRONMENT } from '@axim-anahnu/common/environment';
import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { LANGUAGE_URL } from '../../injection-tokens/language-url.token';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoaderService implements TranslocoLoader {
  #http = inject(HttpClient);
  #environment = inject(ENVIRONMENT);
  #languageUrlToken = inject(LANGUAGE_URL);

  getTranslation(lang: string) {
      const languageUrl = `${this.#environment.baseUrl}/${this.#languageUrlToken.replace(/{{language}}/g, lang)}`;
      return this.#http.get<Translation>(languageUrl);
  }
}
