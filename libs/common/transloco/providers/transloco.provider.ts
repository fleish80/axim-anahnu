import { isDevMode, makeEnvironmentProviders } from '@angular/core';
import { provideTransloco, provideTranslocoScope } from '@ngneat/transloco';
import { DIRECTION_MAP } from '../injection-tokens/direction-map.token';
import { LANGUAGE_URL } from '../injection-tokens/language-url.token';
import { DirectionType } from '../models/direction.type';
import { TranslocoHttpLoaderService } from '../services/transloco-loader/transloco-loader.service';

export function provideAATransloco(availableLangs: string[], defaultLang: string, languageUrl: string, scope: string[], directionMap: Record<string, DirectionType>) {
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
            { provide: DIRECTION_MAP, useValue: directionMap }
        ]),
        scope.map(s => provideTranslocoScope(s))
    ];
    return providers;
}
