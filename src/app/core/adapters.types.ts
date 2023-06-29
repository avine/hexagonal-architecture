import { ICartRepository, ICatalogRepository } from '@domain';

export interface AdapterSingletons {
  readonly catalogRepository: ICatalogRepository;
  readonly cartRepository: ICartRepository;
}
