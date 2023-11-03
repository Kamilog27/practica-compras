import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './compras/pages/compras/compras.component';
import { ProductComponent } from './compras/pages/product/product.component';

const routes: Routes = [
  {path:'compras',component:ComprasComponent},
  {path:'',redirectTo:'compras',pathMatch:'full'},
  {path:'product/:id',component:ProductComponent},
  {path:'**',redirectTo:'compras'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
