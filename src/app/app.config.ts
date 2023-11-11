import {ApplicationConfig, LOCALE_ID} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {registerLocaleData} from "@angular/common";

import localeNl from "@angular/common/locales/nl";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    {provide: LOCALE_ID, useValue: 'nl-BE' }]
};

registerLocaleData(localeNl, "nl");
