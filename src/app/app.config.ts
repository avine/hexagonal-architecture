import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CART_PROVIDERS, CATALOG_PROVIDERS } from './shared/infrastructure/in-memory';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), ...CART_PROVIDERS, ...CATALOG_PROVIDERS],
};
