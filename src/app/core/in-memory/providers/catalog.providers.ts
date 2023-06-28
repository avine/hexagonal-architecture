// --- Hexagonal architecture: client side infrastructure ---

import { ClassProvider, FactoryProvider } from '@angular/core';
import { CatalogFeature, ICatalogRepository } from '@domain';

import { CatalogRepository, CatalogService } from '../../services';
import { CatalogRepositoryAdapter } from '../adapters';

const catalogRepositoryProvider: ClassProvider = {
  provide: CatalogRepository,
  useClass: CatalogRepositoryAdapter,
};

const catalogServiceProvider: FactoryProvider = {
  provide: CatalogService,
  useFactory: (catalogRepository: ICatalogRepository) => new CatalogFeature(catalogRepository),
  deps: [CatalogRepository],
};

export const CATALOG_PROVIDERS = [catalogRepositoryProvider, catalogServiceProvider] as const;
