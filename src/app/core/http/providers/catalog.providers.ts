// --- Hexagonal architecture: client side infrastructure ---

import { FactoryProvider } from '@angular/core';
import { CatalogFeature } from '@domain';

import { CatalogService } from '../../services';
import { adapterSingletons } from '../adapters';

export const catalogServiceProvider: FactoryProvider = {
  provide: CatalogService,
  useFactory: () => new CatalogFeature(adapterSingletons.catalogRepository),
};
