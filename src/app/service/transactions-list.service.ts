import { Injectable } from '@angular/core';
import Transactions from '../transactions.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsListService {
  transactions: Transactions[]=[]
  constructor() { }
  getTransactionsList(){
    return this.transactions;
  }
}
