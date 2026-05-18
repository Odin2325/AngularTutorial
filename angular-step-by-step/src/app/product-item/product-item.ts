import { Component, input, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-item',
  imports: [ReactiveFormsModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
  standalone: true,
})
export class ProductItem {
  currProduct = input<{name:string,price:number}>({name:'',price:0});

  prodName = output<string>();

  onRemoveSelected(){
    this.prodName.emit(this.currProduct().name);
  }

  name = new FormControl('');
}
