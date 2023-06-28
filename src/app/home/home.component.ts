import { zip } from 'rxjs';

import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { CartItem, Product } from '@domain';

import { CartService, CatalogService } from '../core/services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  #catalogService = inject(CatalogService);

  #cartService = inject(CartService);

  protected products = signal<Product[]>([]);

  protected cart = signal<CartItem[]>([]);

  ngOnInit(): void {
    this.#refresh();
  }

  #refresh() {
    zip([this.#catalogService.getAllProducts(), this.#cartService.get()]).subscribe(([products, cart]) => {
      this.products.set(products);
      this.cart.set(cart);
    });
  }

  protected addToCart(productId: number) {
    this.#cartService.addItem(productId).subscribe(() => this.#refresh());
  }
}
