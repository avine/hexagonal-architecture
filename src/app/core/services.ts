// --- Hexagonal architecture: client side infrastructure ---

import { InjectionToken } from '@angular/core';

import { ICartService, ICatalogService } from '@domain';

export const CatalogService = new InjectionToken<ICatalogService>('CatalogService');

export const CartService = new InjectionToken<ICartService>('CartService');
