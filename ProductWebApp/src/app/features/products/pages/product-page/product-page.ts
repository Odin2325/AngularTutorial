import { Component } from '@angular/core';
import { Product } from '../../../../core/models/product.models';
import { CreateProduct } from '../../../../core/models/create-product.model';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductSummary } from '../../components/product-summary/product-summary';
import { AddProduct } from '../../components/add-product/add-product';

@Component({
  selector: 'app-product-page',
  imports: [ProductCard, ProductSummary, AddProduct],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
  //State
  selectedProduct: Product | null = null;

  //Sample Data
  products: Product[] = [
    {
      id: 1,
      name: 'Mechanical Keyboard',
      description: 'A compact mechanical keyboard with blue switches.',
      price: 79.99,
      category: 'Accessories',
      stockQuantity: 0,
      isActive: false,
      brand: 'logitech',
      supplier: 'amazon',
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      description: 'A sleek wireless mouse with ergonomic design.',
      price: 39.99,
      brand: 'ClickPro',
      category: 'Accessories',
      stockQuantity: 12,
      isActive: true,
      supplier: 'ebay',
    },
    {
      id: 3,
      name: 'USB-C Monitor',
      description: 'A 27-inch 4K monitor with USB-C connectivity.',
      price: 299.99,
      brand: 'ViewSonic',
      category: 'Displays',
      stockQuantity: 25,
      isActive: true,
      supplier: 'Obi',
    },
    {
      id: 4,
      name: 'Xbox Controller',
      description: 'A wireless controller compatible with Xbox and PC.',
      price: 59.99,
      brand: 'Microsoft',
      category: 'Gaming',
      stockQuantity: 13,
      isActive: true,
      supplier: 'Hagebaumarkt',
    },
  ];

  //Derived Values
  get totalProducts(): number {
    return this.products.length;
  }

  get activeProducts(): number {
    return this.products.filter((product) => product.isActive).length;
  }

  get productsInStock(): number {
    return this.products.filter((product) => product.stockQuantity > 0).length;
  }

  get inactiveProducts(): number {
    return this.products.filter((product) => !product.isActive).length;
  }

  get productsOutOfStock(): number {
    return this.products.filter((product) => product.stockQuantity === 0).length;
  }

  //Event Handlers
  onProductSelected(product: Product) {
    this.selectedProduct = product;
  }

  onProductDeleted(productId: number) {
    this.products = this.products.filter((product) => product.id !== productId);

    if (this.selectedProduct?.id === productId) {
      this.selectedProduct = null;
    }
  }

  onProductActiveToggled(productId: number) {
    this.products = this.products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          isActive: !product.isActive
        };
      }

      return product;
    });

    if (this.selectedProduct?.id === productId) {
      const updatedProduct = this.products.find(product => product.id === productId);
      this.selectedProduct = updatedProduct ?? null;
    }
  }

  onProductCreated(productData: CreateProduct){
    const nextId =
      this.products.length === 0
        ? 1
        : Math.max(...this.products.map(product => product.id)) + 1;
        
    const newProduct: Product = {
      id: nextId,
      ...productData,
    };

    this.products = [...this.products, newProduct];
    this.selectedProduct = newProduct;
  }


}
