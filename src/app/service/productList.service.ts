import { Injectable } from '@angular/core';
import Product from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  products : Product[] = [
    { id:1,name:'مرغ سوخاری',qty:0,price:55000, isAdded:false,imagePath:"https://images.pexels.com/photos/3926125/pexels-photo-3926125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id:2,name:'سیب زمینی سرخ کرده',qty:0,price:25000, isAdded:false,imagePath:"https://images.pexels.com/photos/3926126/pexels-photo-3926126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id:3,name:'موموس با مرغ',qty:0,price:70000, isAdded:false,imagePath:"https://images.pexels.com/photos/3926123/pexels-photo-3926123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id:4,name:'برنج سرخ شده چینی',qty:0,price:88000, isAdded:false,imagePath:"https://waahgwaah.com/wp-content/uploads/2022/06/pexels-bishop-tamrakar-3926124-1.jpg" },
    { id:5,name:' گوشت تندوری هندی',qty:0,price:95000, isAdded:false,imagePath:"https://images.pexels.com/photos/3926130/pexels-photo-3926130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id:6,name:'چو مین',qty:0,price:58000, isAdded:false,imagePath:"https://images.pexels.com/photos/3926121/pexels-photo-3926121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];
  constructor() { }
  getProducts(){
    return this.products;
  }
}
