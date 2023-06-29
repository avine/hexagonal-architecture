import { adapterSingletons } from '../adapters/in-memory';
import { provideCartService, provideCatalogService } from './providers';

export const infrastructureProviders = [
  provideCatalogService(adapterSingletons),
  provideCartService(adapterSingletons),
];
