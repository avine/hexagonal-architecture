import { Observable } from 'rxjs';

import { CartItem } from './cart.types';

export interface ICartService {
  get(): Observable<CartItem[]>;

  addItem(productId: number): Observable<CartItem>;
}
