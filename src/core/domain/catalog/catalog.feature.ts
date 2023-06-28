import { Observable } from 'rxjs';

import { ICatalogRepository } from './catalog.repository';
import { ICatalogService } from './catalog.service';
import { Product } from './catalog.types';

export class CatalogFeature implements ICatalogService {
  constructor(protected catalogRepository: ICatalogRepository) {}

  getAllProducts(): Observable<Product[]> {
    return this.catalogRepository.getAllProducts();
  }

  decreaseStock(productId: number): Observable<boolean> {
    return this.catalogRepository.decreaseStock(productId);
  }
}
