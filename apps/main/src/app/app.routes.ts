import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
    path: '', pathMatch: 'full', loadChildren: () => import('@axim-anahnu/content/content').then(r => r.contentRoutes)
}];
