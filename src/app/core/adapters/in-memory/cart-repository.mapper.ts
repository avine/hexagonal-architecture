import { CartItem } from '@domain';

import { CartItemDto } from './data.types';

// --- Response mappers ---

export const mapToCartItem = ({ id, desc: title, price }: CartItemDto): CartItem => ({
  productId: Number(id),
  title,
  price,
});
