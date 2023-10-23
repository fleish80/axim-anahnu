import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { ENVIRONMENT } from '@axim-anahnu/common/environment';
import { provideAATransloco } from '@axim-anahnu/common/transloco';
import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideClientHydration(),
    provideHttpClient(),
    provideAATransloco(['en', 'he'], 'he', '/i18n/{{language}}.json', ['content']),
    { provide: ENVIRONMENT, useValue: environment },
  ],
};
