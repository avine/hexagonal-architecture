import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

/* --- Choose --- */

// 1. "in-memory" adapter
import { infrastructureProviders } from './core/adapters/in-memory';

// 2. "http" adapter
//import { infrastructureProviders } from './core/adapters/http';

/* --- End of choose --- */

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), infrastructureProviders],
};
