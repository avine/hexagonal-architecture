import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CART_PROVIDERS, CATALOG_PROVIDERS } from './core/http/providers';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), ...CART_PROVIDERS, ...CATALOG_PROVIDERS],
};
