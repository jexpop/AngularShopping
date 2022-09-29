import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontComponent } from './front.component';
import { FrontMainView } from './views/front-main/front-main.view';
import { FrontDetailView } from './views/front-detail/front-detail.view';
import { FrontRoutingModule } from './front-rounting.module';
import { FrontCommonsModule } from './commons/front-commons.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from 'src/app/shared/interceptors/error.interceptor';


@NgModule({
  declarations: [
    FrontComponent,
    FrontMainView,
    FrontDetailView
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    FrontCommonsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class FrontModule { }
