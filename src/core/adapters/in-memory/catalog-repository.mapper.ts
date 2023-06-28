import { Product } from '@core/domain';

import { ProductDto } from './data.types';

export const mapToProduct = ({ id, title, price, availableUnits: stock }: ProductDto): Product => ({
  id: Number(id),
  title,
  price,
  stock,
});

export const mapToProductDtoId = (id: number) => String(id);
