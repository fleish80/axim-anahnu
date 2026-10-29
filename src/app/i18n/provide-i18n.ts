import { isDevMode } from '@angular/core';
import { provideTransloco } from '@jsverse/transloco';
import { DEFAULT_LANGUAGE, LANGUAGES } from './languages';
import { TranslationLoader } from './translation-loader';

export function provideI18n() {
  return provideTransloco({
    config: {
      availableLangs: [...LANGUAGES],
      defaultLang: DEFAULT_LANGUAGE,
      reRenderOnLangChange: true,
      prodMode: !isDevMode(),
    },
    loader: TranslationLoader,
  });
}
