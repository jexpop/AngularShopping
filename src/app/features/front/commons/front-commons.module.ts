import { NgModule } from '@angular/core';

import { FrontComponentsModule } from './components/front-components.module';
import { LibAngularMaterialModule } from './lib-angular-material/front-angular-material.module';
import { FrontServicesModule } from './services/front-services.module';


@NgModule({

  exports: [
    FrontComponentsModule,
    FrontServicesModule,
    LibAngularMaterialModule
  ]
  
})
export class FrontCommonsModule { }
