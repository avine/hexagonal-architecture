// --- Hexagonal architecture: client side port ---

import { Observable } from 'rxjs';

import { Product } from './catalog.types';

export interface ICatalogService {
  getAllProducts(): Observable<Product[]>;

  decreaseStock(productId: number): Observable<boolean>;
}
