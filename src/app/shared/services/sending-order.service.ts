import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataOrderType} from "../../../types/data-order.type";

@Injectable()
export class SendingOrderService {

  constructor(private http: HttpClient) { }

  createOrder(data: DataOrderType) {
    return this.http.post<{ success: boolean, message?: string }>(`https://testologia.ru/order-tea`, data);
  }
}
