import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {OrderComponent} from "./order.component";
import {SendingOrderService} from "../../shared/services/sending-order.service";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrderRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    OrderRoutingModule
  ],
  providers : [
    SendingOrderService
  ],
})
export class OrderModule { }
