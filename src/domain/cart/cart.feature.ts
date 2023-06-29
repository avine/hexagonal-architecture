// --- Hexagonal architecture: use cases ---

import { Observable } from 'rxjs';

import { ICatalogRepository } from '../catalog/catalog.repository';
import { ICartRepository } from './cart.repository';
import { ICartService } from './cart.service';
import { CartItem } from './cart.types';

export class CartFeature implements ICartService {
  constructor(protected cartRepository: ICartRepository, protected catalogRepository: ICatalogRepository) {}

  get(): Observable<CartItem[]> {
    return this.cartRepository.get();
  }

  addItem(productId: number): Observable<CartItem> {
    return this.cartRepository.addItem(productId);
  }
}
