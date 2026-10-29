import { Routes } from '@angular/router';
import { languageResolver } from './i18n/language.resolver';
import { Language } from './i18n/languages';

const home = (lang: Language) => ({
  loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  data: { lang },
  resolve: { lang: languageResolver },
});

export const routes: Routes = [
  { path: '', pathMatch: 'full', ...home('he') },
  { path: 'en', ...home('en') },
  { path: '**', redirectTo: '' },
];
