import { Route } from '@angular/router';
import { ContentComponent } from './components/content/content.component';

export const contentRoutes: Route[] = [
   {path: '', pathMatch: 'full', component: ContentComponent}
];
