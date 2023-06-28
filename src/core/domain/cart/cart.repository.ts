import { Observable } from 'rxjs';

import { CartItem } from './cart.types';

export interface ICartRepository {
  get(): Observable<CartItem[]>;

  addItem(productId: number): Observable<CartItem>;
}
