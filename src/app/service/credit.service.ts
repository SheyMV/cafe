import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  credit:number=350000;
  constructor() { }
  getCredit(){
    return this.credit;
  }
}
