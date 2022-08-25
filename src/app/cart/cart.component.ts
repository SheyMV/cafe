import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CreditService } from 'src/app/service/credit.service';
import { OrdersService } from 'src/app/service/orders.service';
import order from '../order.model';
import Product from '../product.model';
import * as momentJalaali from "moment-jalaali";
import Transactions from '../transactions.model';
import { TransactionsListService } from '../service/transactions-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input('selectedProducts') products: Product[];
  @Output() closeModal= new EventEmitter<void>();
  @Output() exitCart= new EventEmitter<void>();
  totalPrice:number;
  credit:number;
  orders:order[]=[];
  orderNumber=0;
  date=new Date();
  transactionsList:Transactions[]=[];
  purchaseDesc='کاهش اعتبار بابت خرید ';
  purchaseType= 'خرید';
  public get total() : number {
   this.totalPrice = 0;
    this.products.forEach(product=> this.totalPrice += product.price * product.qty)
    return this.totalPrice;
  }
    constructor(private ordersService : OrdersService, public creditService: CreditService, public transactionsService:TransactionsListService) {  
      this.orders = this.ordersService.getOrders();
      this.credit = this.creditService.getCredit();      
     this.transactionsList = this.transactionsService.getTransactionsList();
    }
    
    
    ngOnInit( ): void {
    this.products.forEach((item)=> {
      this.totalPrice +=  item.price * item.qty 
    })
  }
  cartLength(){
    if (this.products.length < 1) {
      this.closeModal.emit(); 
    }
  }
  closeCart(){      
    this.exitCart.emit();
  }

  addItem(product : Product){   
    product.qty = product.qty + 1
  }

  removeItem(product : Product){
    product.qty = product.qty -1
    if (product.qty == 0) {
      const id = this.products.indexOf(product)
      this.products.splice(id,1)
      this.totalPrice = this.totalPrice - product.price; 
      product.isAdded =false;
    }
  }
  // checkPrice(){
  //   this.totalPrice=0;
  //   this.products.forEach((item)=> {
  //     this.totalPrice +=  item.price * item.qty 
  //   })
  // }
  submitOrder(products:Product[],form :NgForm ){
    if (this.credit < this.totalPrice) {
      alert('اعتبار کافی نیست. (^-_-)');
    } else{
      this.creditService.credit = this.credit - this.totalPrice; 
      alert('سفارش شما با موفقیت ثبت شد. v(^o^)v');
      this.orders.unshift({
        orderNumber: this.orders.length + 1,
        orderDate:this.date,
        totalPrice:this.totalPrice,
        products:products,
        desc:form.value.desc
      });
      this.transactionsList.unshift({date:this.date,desc:this.purchaseDesc,type:this.purchaseType,amount:this.totalPrice})

      this.closeModal.emit(); 
      this.products.map((item)=> item.isAdded = false) 
    }
  }

}

