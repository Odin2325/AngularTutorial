import { Component, output } from '@angular/core';
import { CreateProduct } from '../../../../core/models/create-product.model';

@Component({
  selector: 'app-add-product',
  imports: [],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  productCreated = output<CreateProduct>();

  name= '';
  description= '';
  brand= '';
  price= 0;
  category= '';
  stockQuantity= 0;
  isActive= false;
  supplier='';

  errorMessage = '';

  onAddProduct(){
    if(this.name.trim() === ''){
      this.errorMessage = 'Product name is required';
      return;
    }
    if(this.brand.trim() === ''){
      this.errorMessage = 'Brand is required';
      return;
    }
    if(this.category.trim() === ''){
      this.errorMessage = 'Category is required';
      return;
    }
    if(this.description.trim() === ''){
      this.errorMessage = 'Description is required';
      return;
    }
    if(this.price <= 0){
      this.errorMessage = 'Price must be greater than 0.';
      return;
    }
    if(this.stockQuantity < 0){
      this.errorMessage = 'Stock quantity cannot be negative.';
      return;
    }
    if(this.supplier.trim() === ''){
      this.errorMessage = 'Supplier is required';
      return;
    }

    const newProduct: CreateProduct = {
      name: this.name,
      description: this.description,
      brand: this.brand,
      price: this.price,
      category: this.category,
      stockQuantity: this.stockQuantity,
      isActive: this.isActive,
      supplier: this.supplier,
    };

    this.productCreated.emit(newProduct);

    this.resetForm();
  }

  resetForm(){
    this.name = '';
    this.description = '';
    this.brand = '';
    this.price = 0;
    this.category = '';
    this.stockQuantity = 0;
    this.isActive = true;
    this.errorMessage = '';
    this.supplier = '';
  }

}
