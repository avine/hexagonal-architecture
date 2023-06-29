// --- Hexagonal architecture: client side infrastructure ---

import { FactoryProvider } from '@angular/core';
import { CatalogFeature } from '@domain';

import { AdapterSingletons } from '../adapters.types';
import { CatalogService } from '../services';

export const provideCatalogService = (adapterSingletons: AdapterSingletons): FactoryProvider => ({
  provide: CatalogService,
  useFactory: () => new CatalogFeature(adapterSingletons.catalogRepository),
});
