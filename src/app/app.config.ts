import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

/* --- Choose --- */

// 1. "in-memory" adapter
//import { CART_PROVIDERS, CATALOG_PROVIDERS } from './core/in-memory/providers';

// 2. "http" adapter
import { CART_PROVIDERS, CATALOG_PROVIDERS } from './core/http/providers';

/* --- End of choose --- */

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), ...CART_PROVIDERS, ...CATALOG_PROVIDERS],
};
