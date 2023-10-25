import { isDevMode, makeEnvironmentProviders } from '@angular/core';
import { provideTransloco, provideTranslocoScope } from '@ngneat/transloco';
import { TranslocoHttpLoaderService } from '../services/transloco-loader/transloco-loader.service';
import { LANGUAGE_URL } from '../injection-tokens/language-url.token';

export function provideAATransloco(availableLangs: string[], defaultLang: string, languageUrl: string, scope: string[]) {
    const providers = [
        ...provideTransloco({
            config: {
                availableLangs,
                defaultLang,
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: !isDevMode(),
            },
            loader: TranslocoHttpLoaderService,
        }),
        makeEnvironmentProviders([
            { provide: LANGUAGE_URL, useValue: languageUrl },
        ]),
        scope.map(s => provideTranslocoScope(s))
    ];
    return providers;
}
