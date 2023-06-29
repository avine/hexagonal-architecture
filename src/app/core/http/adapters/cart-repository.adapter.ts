// --- Hexagonal architecture: server side adapter ---

import { map, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CartItem, ICartRepository } from '@domain';

import { mapToCartItem } from './cart-repository.mapper';
import { mapToProductDtoId } from './catalog-repository.mapper';
import { CartItemDto } from './data.types';

export class CartRepositoryAdapter implements ICartRepository {
  #httpClient = inject(HttpClient);

  get(): Observable<CartItem[]> {
    return this.#httpClient
      .get<CartItemDto[]>('http://localhost:8080/api/basket')
      .pipe(map((cartItemsDto) => cartItemsDto.map(mapToCartItem)));
  }

  addItem(productId: number): Observable<CartItem> {
    return this.#httpClient
      .post<CartItemDto>('http://localhost:8080/api/basket', { productId: mapToProductDtoId(productId) })
      .pipe(map((cartItemDto) => mapToCartItem(cartItemDto)));
  }
}
