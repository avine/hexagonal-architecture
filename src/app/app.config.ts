import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CART_PROVIDERS, CATALOG_PROVIDERS } from './core/in-memory/providers';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), ...CART_PROVIDERS, ...CATALOG_PROVIDERS],
};
