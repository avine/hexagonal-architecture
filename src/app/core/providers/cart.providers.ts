// --- Hexagonal architecture: client side infrastructure ---

import { FactoryProvider } from '@angular/core';
import { CartFeature } from '@domain';

import { AdapterSingletons } from '../adapters.types';
import { CartService } from '../services';

export const provideCartService = (adapterSingletons: AdapterSingletons): FactoryProvider => ({
  provide: CartService,
  useFactory: () => new CartFeature(adapterSingletons.cartRepository),
});
