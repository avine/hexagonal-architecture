// --- Hexagonal architecture: server side adapter ---

import { map, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ICatalogRepository, Product } from '@domain';

import { mapToProduct } from './catalog-repository.mapper';
import { ProductDto } from './data.types';

export class CatalogRepositoryAdapter implements ICatalogRepository {
  #httpClient = inject(HttpClient);

  getAllProducts(): Observable<Product[]> {
    return this.#httpClient
      .get<ProductDto[]>('http://localhost:8080/api/products')
      .pipe(map((productsDto) => productsDto.map(mapToProduct)));
  }
}
