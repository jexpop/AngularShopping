import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductNewView } from './views/product-new/product-new.view';
import { ProductsView } from './views/products/products.view';


const routes: Routes = [
  { 
      path: '', component: AdminComponent,
      children: [
          { path: 'product-new', component: ProductNewView },
          { path: 'products', component: ProductsView },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
