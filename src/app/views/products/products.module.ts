import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductComponent} from "./product/product.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {SplitDescriptionPipe} from "../../shared/pipes/split-description.pipe";
import {RouterModule} from "@angular/router";
import {ProductsService} from "../../shared/services/products.service";
import {SharedModule} from "../../shared/shared.module";
import {OrderRoutingModule} from "../order/order-routing.module";


@NgModule({
  declarations: [
    ProductComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    RouterModule
  ],
  exports: [
    ProductsRoutingModule
  ],
  providers : [
    ProductsService
  ],
})
export class ProductsModule { }
