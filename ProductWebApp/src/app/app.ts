import { Component } from '@angular/core';
import { ProductPage } from './features/products/pages/product-page/product-page';

@Component({
  selector: 'app-root',
  imports: [ProductPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}