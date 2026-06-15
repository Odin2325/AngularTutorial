import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();

  selectProduct = output<Product>();
  deleteProduct = output<number>();
  toggleActive = output<number>();

  onSelect(){
    this.selectProduct.emit(this.product());
  }

  onDelete(){
    this.deleteProduct.emit(this.product().id);
  }

  onToggle(){
    this.toggleActive.emit(this.product().id)
  }
}