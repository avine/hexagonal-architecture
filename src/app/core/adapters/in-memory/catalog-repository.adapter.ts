// --- Hexagonal architecture: server side adapter ---

import { delay, Observable, of } from 'rxjs';

import { ICatalogRepository, Product } from '@domain';

import { mapToProduct } from './catalog-repository.mapper';
import { data } from './data';

export class CatalogRepositoryAdapter implements ICatalogRepository {
  getAllProducts(): Observable<Product[]> {
    return of(data.productsDto.map(mapToProduct)).pipe(delay(1));
  }
}
