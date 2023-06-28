import { InjectionToken } from '@angular/core';

import { ICartRepository, ICartService, ICatalogRepository, ICatalogService } from '@core/domain';

export const CatalogRepository = new InjectionToken<ICatalogRepository>('CatalogRepository');

export const CatalogService = new InjectionToken<ICatalogService>('CatalogService');

export const CartRepository = new InjectionToken<ICartRepository>('CartRepository');

export const CartService = new InjectionToken<ICartService>('CartService');
