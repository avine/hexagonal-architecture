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

  // Hack: in this implementation, we just need to make sure that the stock is not empty for this product.
  // But we don't actually decrease the stock.
  // This will be done automatically on the server side when calling `CartRepositoryAdapter.addItem`.
  decreaseStock(productId: number): Observable<boolean> {
    return this.#httpClient
      .get<ProductDto>(`http://localhost:8080/api/products/${productId}`)
      .pipe(map(({ availableUnits }) => availableUnits > 0));
  }
}
