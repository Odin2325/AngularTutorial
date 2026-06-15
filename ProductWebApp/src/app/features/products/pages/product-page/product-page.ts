import { Component } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductSummary } from '../../components/product-summary/product-summary';
import { AddProduct } from '../../components/add-product/add-product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-page',
  imports: [ProductCard, ProductSummary, AddProduct],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
  constructor(public productService: ProductService){}
}
