// --- Hexagonal architecture: client side infrastructure ---

import { cartServiceProvider } from './cart.providers';
import { catalogServiceProvider } from './catalog.providers';

export const infrastructureProviders = [cartServiceProvider, catalogServiceProvider];
