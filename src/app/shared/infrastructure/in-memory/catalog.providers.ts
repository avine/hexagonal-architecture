import { ClassProvider, FactoryProvider } from '@angular/core';

import { CatalogRepository, CatalogService } from '../';
import { CatalogRepositoryInMemoryAdapter } from '@core/adapters/in-memory';
import { CatalogFeature, ICatalogRepository } from '@core/domain';

const catalogRepositoryProvider: ClassProvider = {
  provide: CatalogRepository,
  useClass: CatalogRepositoryInMemoryAdapter,
};

const catalogServiceProvider: FactoryProvider = {
  provide: CatalogService,
  useFactory: (catalogRepository: ICatalogRepository) => new CatalogFeature(catalogRepository),
  deps: [CatalogRepository],
};

export const CATALOG_PROVIDERS = [catalogRepositoryProvider, catalogServiceProvider] as const;
