import { ENVIRONMENT_INITIALIZER, inject } from '@angular/core';
import { Route } from '@angular/router';
import { TranslocoAttributesService } from '@axim-anahnu/common/transloco';

export const appRoutes: Route[] = [{
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('@axim-anahnu/content/content').then(r => r.contentRoutes),
    providers: [
        {
            provide: ENVIRONMENT_INITIALIZER,
            multi: true,
            useValue() {
                inject(TranslocoAttributesService).init();
            },
        }]
}];
