import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalPriceService {
totalPrice:number;
  constructor() { }
  getTotalPrice(){
    return this.totalPrice;
  }
}
