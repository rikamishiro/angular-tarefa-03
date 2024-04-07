import {
  ApplicationConfig,
  InjectionToken,
  importProvidersFrom,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';

import {
  API_BASE,
  AuthModule,
} from '@nx-monorepo/auth';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(AuthModule),
    provideRouter(
      appRoutes,
      withComponentInputBinding(),
    ),
    provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),
    {
      provide: API_BASE,
      useValue: 'http://localhost:3333/api',
    },
  ],
};
