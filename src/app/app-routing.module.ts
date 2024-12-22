import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {CatalogComponent} from "./component/catalog/catalog.component";
import {OrderComponent} from "./component/order/order.component";
import {ProductComponent} from "./component/product/product.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'order', component: OrderComponent},
  {path: 'product/:id', component: ProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ]
})
export class AppRoutingModule { }
