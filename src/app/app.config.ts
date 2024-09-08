import {ApplicationConfig, LOCALE_ID} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {registerLocaleData} from "@angular/common";

import localeEn from "@angular/common/locales/en";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    {provide: LOCALE_ID, useValue: 'en-US' }]
};

registerLocaleData(localeEn, "en");
