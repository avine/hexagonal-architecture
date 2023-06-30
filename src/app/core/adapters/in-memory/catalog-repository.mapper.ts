import { Product } from '@domain';

import { ProductDto } from './data.types';

// --- Response mappers ---

export const mapToProduct = ({ id, title, price, availableUnits: stock }: ProductDto): Product => ({
  id: Number(id),
  title,
  price,
  stock,
});

// --- Request mappers ---

export const mapToProductDtoId = (id: number) => String(id);
