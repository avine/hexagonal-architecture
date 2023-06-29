import { adapterSingletons } from '../adapters/http';
import { provideCartService, provideCatalogService } from './providers';

export const infrastructureProviders = [
  provideCatalogService(adapterSingletons),
  provideCartService(adapterSingletons),
];
