import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front.component';
import { FrontMainView } from './views/front-main/front-main.view';
import { FrontDetailView } from './views/front-detail/front-detail.view';

const routes: Routes = [
    { 
        path: '', component: FrontComponent,
        children: [
            { path: 'main', component: FrontMainView },
            { path: 'detail', component: FrontDetailView },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
