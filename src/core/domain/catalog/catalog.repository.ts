import { Observable } from 'rxjs';

import { Product } from './catalog.types';

export interface ICatalogRepository {
  getAllProducts(): Observable<Product[]>;

  decreaseStock(productId: number): Observable<boolean>;
}
