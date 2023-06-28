import { delay, Observable, of } from 'rxjs';

import { ICatalogRepository, Product } from '../../domain';
import { IN_MEMORY } from './data-in-memory';

export class CatalogRepositoryInMemoryAdapter implements ICatalogRepository {
  getAllProducts(): Observable<Product[]> {
    return of(IN_MEMORY.PRODUCTS).pipe(delay(1));
  }

  decreaseStock(productId: number): Observable<boolean> {
    let success = false;

    IN_MEMORY.PRODUCTS = IN_MEMORY.PRODUCTS.map((product) => {
      if (product.id === productId && product.stock > 0) {
        success = true;
        return { ...product, stock: product.stock - 1 };
      }

      return product;
    });

    return of(success).pipe(delay(1));
  }
}
