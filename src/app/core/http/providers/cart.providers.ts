// --- Hexagonal architecture: client side infrastructure ---

import { FactoryProvider } from '@angular/core';
import { CartFeature } from '@domain';

import { CartService } from '../../services';
import { adapterSingletons } from '../adapters';

export const cartServiceProvider: FactoryProvider = {
  provide: CartService,
  useFactory: () => new CartFeature(adapterSingletons.cartRepository),
};
