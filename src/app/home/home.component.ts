import { Component, OnInit } from '@angular/core';
import Product from '../product.model';
import { ProductListService } from '../service/productList.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsAdded :Product[]=[];
  products: Product[];
  isBtnShowing=false;
  isModalOpen=false;
  orderCount:number=0;
  
  
  public get orderQty() : number {
    var count = 0;
    this.productsAdded.forEach(p=> count += p.qty);
    return count
  }
  

  constructor(private productListService:ProductListService) { 
    this.products= this.productListService.getProducts();     

  }

  ngOnInit(): void {

  }
  
  
    addToCart(product : Product){ 
      product.isAdded= true;   
      this.productsAdded.push(product);       
      product.qty=1;
      if (product.isAdded ) {
        this.isBtnShowing = true;
      } else{
          this.isBtnShowing = false;
        };

    }

    
    addItem(product : Product){   
      product.qty = product.qty + 1
      
    }


  removeItem(product : Product){
    product.qty = product.qty - 1
    this.orderCount = this.orderCount - 1;

    if (product.qty == 0) {
      product.isAdded=false;
      const id = this.productsAdded.indexOf(product)
      this.productsAdded.splice(id,1)
    }
    if (this.orderQty == 0) {
      this.isBtnShowing=false;
    }

  }


  openModal(){
    this.isModalOpen= true ;
    this.isBtnShowing=false;
  }
  closeModal(){
    this.isModalOpen =false ;
    this.isBtnShowing=false;
    this.productsAdded=[]
  }
  exitCart(){
    this.isModalOpen= false;
    this.isBtnShowing=true; 
  }
}
