// --- Hexagonal architecture: server side adapter ---

import { delay, Observable, of } from 'rxjs';

import { ICatalogRepository, Product } from '@domain';

import { mapToProduct, mapToProductDtoId } from './catalog-repository.mapper';
import { data } from './data';

export class CatalogRepositoryAdapter implements ICatalogRepository {
  getAllProducts(): Observable<Product[]> {
    return of(data.productsDto.map(mapToProduct)).pipe(delay(1));
  }

  decreaseStock(productId: number): Observable<boolean> {
    let success = false;

    const productDtoId = mapToProductDtoId(productId);
    data.productsDto = data.productsDto.map((productDto) => {
      if (productDto.id === productDtoId && productDto.availableUnits > 0) {
        success = true;
        return { ...productDto, availableUnits: productDto.availableUnits - 1 };
      }

      return productDto;
    });

    return of(success).pipe(delay(1));
  }
}
