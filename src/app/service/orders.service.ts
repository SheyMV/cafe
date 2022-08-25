import { Injectable } from '@angular/core';
import order from '../order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders: order[]= [];
  totalPrice=[];
  constructor() {}
  getOrders(){
    return this.orders;
  }
  getTotalPrice(){
    this.totalPrice;
  }
}
