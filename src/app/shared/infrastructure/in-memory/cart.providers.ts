import { ClassProvider, FactoryProvider } from '@angular/core';

import { CartRepository, CartService, CatalogRepository } from '../';
import { CartRepositoryInMemoryAdapter } from '@core/adapters/in-memory';
import { CartFeature, ICartRepository, ICatalogRepository } from '@core/domain';

const cartRepositoryProvider: ClassProvider = {
  provide: CartRepository,
  useClass: CartRepositoryInMemoryAdapter,
};

const cartServiceProvider: FactoryProvider = {
  provide: CartService,
  useFactory: (cartRepository: ICartRepository, catalogRepository: ICatalogRepository) =>
    new CartFeature(cartRepository, catalogRepository),
  deps: [CartRepository, CatalogRepository],
};

export const CART_PROVIDERS = [cartRepositoryProvider, cartServiceProvider] as const;
