import { Routes } from '@angular/router';
import { languageResolver } from './i18n/language.resolver';
import { notFoundResolver } from './i18n/not-found.resolver';
import { Language } from './i18n/languages';

const home = (lang: Language) => ({
  loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  data: { lang },
  resolve: { lang: languageResolver },
});

const notFound = {
  loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  resolve: { ready: notFoundResolver },
};

export const routes: Routes = [
  { path: '', pathMatch: 'full', ...home('he') },
  { path: 'en', ...home('en') },
  // Prerendered as 404/index.html and copied to 404.html, which Firebase Hosting serves for unknown paths.
  { path: '404', ...notFound },
  { path: '**', ...notFound },
];
