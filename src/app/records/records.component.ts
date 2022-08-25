import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/service/orders.service';
import Bribe from '../bribe.model';
import order from '../order.model';
import Product from '../product.model';
import { BribeService } from '../service/bribe.service';
import Transactions from '../transactions.model';
import * as momentJalaali from "moment-jalaali";
import { TransactionsListService } from '../service/transactions-list.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  orders: order[] = [];
  bribeInfo: Bribe[];
  ordersSection: boolean = true;
  transactionsSection: boolean = false;
  ordersSubmitted: Product[];
  date;
  isOrderDetailsOpen: boolean = false;
  isTransactionsDetailsOpen: boolean = false;
  totalPrice;
  transactionsList: Transactions[] = [];
  orderDetailDate=new Date();
  detailOrderNumber: number;
  transactionsDesc:string;

  constructor(private ordersService: OrdersService, private bribeService: BribeService, public transactionsService : TransactionsListService) {
    momentJalaali.loadPersian({ usePersianDigits: true, dialect: 'persian-modern' });
    this.orders = this.ordersService.getOrders();
    this.bribeInfo = this.bribeService.getBribes();
    this.transactionsList = this.transactionsService.getTransactionsList();
  }

  ngOnInit(): void {
  }
  openOrders() {
    this.ordersSection = true;
    this.transactionsSection = false;
  }
  openTransactions() {
    this.transactionsSection = true;
    this.ordersSection = false;
  }
  openOrderDetails(order: order) {
    this.isOrderDetailsOpen = true;
    this.ordersSubmitted = order.products;
    this.totalPrice = order.totalPrice
    this.orderDetailDate = order.orderDate;
    this.detailOrderNumber = order.orderNumber
  }
  openTransactionsDetails(transactions: Transactions) {
    this.isTransactionsDetailsOpen = true;
    this.transactionsDesc =  transactions.desc 
  }

}
