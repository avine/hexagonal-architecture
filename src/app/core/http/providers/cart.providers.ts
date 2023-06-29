// --- Hexagonal architecture: client side infrastructure ---

import { ClassProvider, FactoryProvider } from '@angular/core';
import { CartFeature, ICartRepository, ICatalogRepository } from '@domain';

import { CartRepository, CartService, CatalogRepository } from '../../services';
import { CartRepositoryAdapter } from '../adapters';

const cartRepositoryProvider: ClassProvider = {
  provide: CartRepository,
  useClass: CartRepositoryAdapter,
};

const cartServiceProvider: FactoryProvider = {
  provide: CartService,
  useFactory: (cartRepository: ICartRepository, catalogRepository: ICatalogRepository) =>
    new CartFeature(cartRepository, catalogRepository),
  deps: [CartRepository, CatalogRepository],
};

export const CART_PROVIDERS = [cartRepositoryProvider, cartServiceProvider] as const;
