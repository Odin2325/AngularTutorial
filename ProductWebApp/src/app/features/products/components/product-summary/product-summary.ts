import { Component, input } from '@angular/core';
import { Product } from '../../../../core/models/product.models';

@Component({
  selector: 'app-product-summary',
  imports: [],
  templateUrl: './product-summary.html',
  styleUrl: './product-summary.css',
})
export class ProductSummary {
  totalProducts = input.required<number>();
  activeProducts = input.required<number>();
  productsInStock = input.required<number>();
  productsOutOfStock = input.required<number>();
  selectedProduct = input<Product | null>(null);
  inactiveProducts = input.required<number>();
}
