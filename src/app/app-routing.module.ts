import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'product', loadChildren: './product/product.module#ProductPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
