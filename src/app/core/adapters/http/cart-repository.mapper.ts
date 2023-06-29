import { CartItem } from '@domain';

import { CartItemDto } from './data.types';

export const mapToCartItem = ({ id, desc: title, price }: CartItemDto): CartItem => ({
  productId: Number(id),
  title,
  price,
});

export const mapToCartItemDtoId = (id: number) => String(id);
