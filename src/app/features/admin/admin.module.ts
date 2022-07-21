import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsView } from './views/products/products.view';
import { ProductNewView } from './views/product-new/product-new.view';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    ProductsView,
    ProductNewView,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
