import {ApplicationConfig, LOCALE_ID} from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
import {registerLocaleData} from "@angular/common";

import localeEn from "@angular/common/locales/en";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withDebugTracing()),
    {provide: LOCALE_ID, useValue: 'en-US' }]
};

registerLocaleData(localeEn, "en");
