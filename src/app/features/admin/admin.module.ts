import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsView } from './views/products/products.view';
import { ProductNewView } from './views/product-new/product-new.view';


@NgModule({
  declarations: [
    ProductsView,
    ProductNewView
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
