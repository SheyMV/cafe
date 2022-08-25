import { Component, OnInit } from '@angular/core';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sidebarOpend = false;


  constructor(public creditService: CreditService) {

  }

  ngOnInit(): void {
  }
  openSideBar() {
    this.sidebarOpend = !this.sidebarOpend;
  }
  closeSideBar(){
    this.sidebarOpend = !this.sidebarOpend;
  }
}
