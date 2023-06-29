// --- Hexagonal architecture: server side adapters ---

import { ICartRepository, ICatalogRepository } from '@domain';

import { CartRepositoryAdapter } from './cart-repository.adapter';
import { CatalogRepositoryAdapter } from './catalog-repository.adapter';

let catalogRepository: ICatalogRepository;

let cartRepository: ICartRepository;

export const adapterSingletons = {
  get catalogRepository() {
    if (!catalogRepository) {
      catalogRepository = new CatalogRepositoryAdapter();
    }
    return catalogRepository;
  },

  get cartRepository() {
    if (!cartRepository) {
      cartRepository = new CartRepositoryAdapter();
    }
    return cartRepository;
  },
};
