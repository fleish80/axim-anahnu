import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { ENVIRONMENT } from '@axim-anahnu/common/environment';
import { provideAATransloco } from '@axim-anahnu/common/transloco';
import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideClientHydration(),
    provideHttpClient(),
    provideAATransloco(['en', 'he'], 'he', '/i18n/{{language}}.json', ['content'], {'en': 'ltr', 'he': 'rtl'}),
    { provide: ENVIRONMENT, useValue: environment },
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebase)), provideFirestore(() => getFirestore()), AngularFireModule.initializeApp(environment.firebase)),
    provideAnimations()
],
};
