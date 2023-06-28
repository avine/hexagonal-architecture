import { CartItem, Product } from '../../domain';

const PRODUCTS: Product[] = [
  { id: 1, title: 'Product 1', stock: 2, price: 10 },
  { id: 2, title: 'Product 2', stock: 3, price: 15 },
  { id: 3, title: 'Product 3', stock: 1, price: 5 },
];

const CART: CartItem[] = [];

export const IN_MEMORY = { PRODUCTS, CART };
