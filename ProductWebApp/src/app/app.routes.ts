import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { ProductPage } from './features/products/pages/product-page/product-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'products',
    component: ProductPage,
  },
  {
    path: '**',
    redirectTo: '',
  },
];