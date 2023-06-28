// --- Hexagonal architecture: use cases ---

import { Observable, filter, mergeMap } from 'rxjs';

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
    return this.catalogRepository.decreaseStock(productId).pipe(
      filter((success) => success),
      mergeMap(() => this.cartRepository.addItem(productId))
    );
  }
}
