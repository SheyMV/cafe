import { Component, OnInit } from '@angular/core';
import { BribeService } from '../service/bribe.service';
import {  FormControl, FormGroup, NgForm } from '@angular/forms';
import Bribe from '../bribe.model';
import { CreditService } from '../service/credit.service';
import Transactions from '../transactions.model';
import { TransactionsListService } from '../service/transactions-list.service';


@Component({
  selector: 'app-bribe',
  templateUrl: './bribe.component.html',
  styleUrls: ['./bribe.component.scss']
})
export class BribeComponent implements OnInit {
  bribesGathered: Bribe[] = [];
  bribes: Bribe[] = [];
  date=new Date();
  transactionsList:Transactions[]=[];
  bribeDesc='کاهش اعتبار بابت رشوه ';
  bribeType= 'رشوه';
  bribeForm= new FormGroup({
    bribee: new FormControl(''),
    bribeAmount: new FormControl(''),
    desc: new FormControl(''),
  })
  constructor(private bribeService: BribeService, private creditService: CreditService , public transactionsService: TransactionsListService) {
    this.bribes = this.bribeService.getBribes();
    this.transactionsList = this.transactionsService.getTransactionsList();
  }

  ngOnInit(): void {
  }
  submit() {
    if (this.creditService.credit >= this.bribeForm.value.bribeAmount ) {
      this.bribes.unshift({
        bribee: this.bribeForm.value.bribee,
        bribeAmount: this.bribeForm.value.bribeAmount,
        explain: this.bribeForm.value.desc,
        date: this.date
      });
      alert(' vرشوه با موفقیت فرستاده شد./(*0*) ');
      console.log(this.bribeForm.value);
      console.log(this.bribes);
      this.creditService.credit = this.creditService.credit - this.bribeForm.value.bribeAmount;
        this.transactionsList.unshift({
          date:this.date,
          desc: this.bribeDesc,
          type:this.bribeType,
          amount: this.bribeForm.value.bribeAmount
        })
      this.bribeForm.reset();
        } else {
      alert('اعتبار کافی نیست. (^-_-)');           
    }
  }

}
