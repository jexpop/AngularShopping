import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { path: 'front', loadChildren: () => import('./features/front/front.module').then( m => m.FrontModule ) },
    { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then( m => m.AdminModule ) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }