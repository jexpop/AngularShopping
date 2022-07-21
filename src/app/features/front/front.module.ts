import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front.component';
import { FrontMainView } from './views/front-main/front-main.view';
import { FrontDetailView } from './views/front-detail/front-detail.view';
import { FrontRoutingModule } from './front-rounting.module';


@NgModule({
  declarations: [
    FrontComponent,
    FrontMainView,
    FrontDetailView
  ],
  imports: [
    CommonModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
