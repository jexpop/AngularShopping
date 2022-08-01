import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibAngularMaterialModule } from '../lib-angular-material/front-angular-material.module';
import { ProductComponent } from './product/product.component';

const COMPONENTS:any = [ProductComponent];


@NgModule({

  declarations: COMPONENTS,

  exports: [
    COMPONENTS, 
    LibAngularMaterialModule
  ],

  imports: [
    CommonModule,
    LibAngularMaterialModule
  ]
  
})
export class FrontComponentsModule { }
