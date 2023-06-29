import { Product } from './types';

export const getProducts = (): Product[] => [
  {
    id: '1',
    title: 'Product 1',
    price: 10,
    availableUnits: 3,
  },
  {
    id: '2',
    title: 'Product 2',
    price: 15,
    availableUnits: 2,
  },
  {
    id: '3',
    title: 'Product 3',
    price: 5,
    availableUnits: 1,
  },
];
