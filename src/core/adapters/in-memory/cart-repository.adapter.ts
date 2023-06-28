import { delay, EMPTY, Observable, of } from 'rxjs';

import { CartItem, ICartRepository } from '../../domain';
import { mapToCartItem } from './cart-repository.mapper';
import { mapToProductDtoId } from './catalog-repository.mapper';
import { data } from './data';
import { CartItemDto } from './data.types';

export class CartRepositoryAdapter implements ICartRepository {
  get(): Observable<CartItem[]> {
    return of(data.cartItemsDto.map(mapToCartItem)).pipe(delay(1));
  }

  addItem(productId: number): Observable<CartItem> {
    const productDtoId = mapToProductDtoId(productId);
    const productDto = data.productsDto.find(({ id }) => id === productDtoId);

    if (productDto) {
      const { id, title: desc, price } = productDto;
      const cartItemDto: CartItemDto = { id, desc, price };

      data.cartItemsDto = [...data.cartItemsDto, cartItemDto];
      return of(mapToCartItem(cartItemDto));
    }

    return EMPTY;
  }
}
