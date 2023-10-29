import { isDevMode, makeEnvironmentProviders } from '@angular/core';
import { provideTransloco, provideTranslocoScope } from '@ngneat/transloco';
import { TranslocoHttpLoaderService } from '../services/transloco-loader/transloco-loader.service';
import { LANGUAGE_URL } from '../injection-tokens/language-url.token';
import { DirectionType } from '../models/direction.type';
import { DIRECTION_MAP } from '../injection-tokens/direction-map.token';
import { CURRENT_DIRECTION } from '../injection-tokens/current-direction.token';

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
            { provide: DIRECTION_MAP, useValue: directionMap },
            { provide: CURRENT_DIRECTION, useValue: directionMap[defaultLang] },
        ]),
        scope.map(s => provideTranslocoScope(s))
    ];
    return providers;
}
