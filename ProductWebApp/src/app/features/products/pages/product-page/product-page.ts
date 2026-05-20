import { Component } from '@angular/core';
import { Product } from '../../../../core/models/product.models';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-product-page',
  imports: [ProductCard],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
  products: Product[] = [{
    id: 1,
    name: 'Mechanical Keyboard',
    description: 'A compact mechanical keyboard with blue switches.',
    price: 79.99,
    category: 'Accessories',
    stockQuantity: 12,
    isActive: false,
    brand: 'logitech',
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    description: 'A sleek wireless mouse with ergonomic design.',
    price: 39.99,
    brand: 'ClickPro',
    category: 'Accessories',
    stockQuantity: 0,
    isActive: true,
  },
  {
    id: 3,
    name: 'USB-C Monitor',
    description: 'A 27-inch 4K monitor with USB-C connectivity.',
    price: 299.99,
    brand: 'ViewSonic',
    category: 'Displays',
    stockQuantity: 5,
    isActive: true,
  },
  {id: 4,
    name: 'Xbox Controller',
    description: 'A wireless controller compatible with Xbox and PC.',
    price: 59.99,
    brand: 'Microsoft',
    category: 'Gaming',
    stockQuantity: 20,
    isActive: true,
  }
];
}