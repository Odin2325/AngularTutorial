import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.models';
import { CreateProduct } from '../models/create-product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    products = signal<Product[]>([
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
  ]);

  selectedProduct = signal<Product | null>(null);

  totalProducts = computed(() => this.products().length);

  activeProducts = computed(() =>
    this.products().filter(product => product.isActive).length
  );

  inactiveProducts = computed(() =>
    this.products().filter(product => !product.isActive).length
  );

  productsInStock = computed(() =>
    this.products().filter(product => product.stockQuantity > 0).length
  );

  productsOutOfStock = computed(()=>
    this.products().filter(product => product.stockQuantity <= 0).length
  );

  selectProduct(product: Product) {
    this.selectedProduct.set(product);
  }

  deleteProduct(productId: number) {
    this.products.update(products =>
      products.filter(product => product.id !== productId)
    );

    if (this.selectedProduct()?.id === productId) {
      this.selectedProduct.set(null);
    }
  }

  toggleActive(productId: number) {
    this.products.update(products =>
      products.map(product => {
        if (product.id === productId) {
          return {
            ...product,
            isActive: !product.isActive
          };
        }

        return product;
      })
    );

    if (this.selectedProduct()?.id === productId) {
      const updatedProduct = this.products().find(product => product.id === productId);
      this.selectedProduct.set(updatedProduct ?? null);
    }
  }

  createProduct(productData: CreateProduct) {
    const currentProducts = this.products();

    const nextId =
      currentProducts.length === 0
        ? 1
        : Math.max(...currentProducts.map(product => product.id)) + 1;

    const newProduct: Product = {
      id: nextId,
      ...productData,
    };

    this.products.update(products => [...products, newProduct]);
    this.selectedProduct.set(newProduct);
  }

  clearSelection(){
    this.selectedProduct.set(null);
  }

  deleteAllInactiveProducts() {
    const selected = this.selectedProduct();

    this.products.update(products =>
      products.filter(product => product.isActive)
    );

    if (selected && !selected.isActive) {
      this.selectedProduct.set(null);
    }
  }
}
