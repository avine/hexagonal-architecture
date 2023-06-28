import { delay, EMPTY, Observable, of } from 'rxjs';

import { CartItem, ICartRepository } from '../../domain';
import { IN_MEMORY } from './data-in-memory';

export class CartRepositoryInMemoryAdapter implements ICartRepository {
  get(): Observable<CartItem[]> {
    return of(IN_MEMORY.CART).pipe(delay(1));
  }

  addItem(productId: number): Observable<CartItem> {
    const product = IN_MEMORY.PRODUCTS.find(({ id }) => id === productId);
    if (product) {
      const { id: productId, title, price } = product;
      IN_MEMORY.CART.push({ productId, title, price });
      return of({ productId, title, price });
    }
    return EMPTY;
  }
}
