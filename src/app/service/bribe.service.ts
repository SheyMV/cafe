import { Injectable } from '@angular/core';
import Bribe from '../bribe.model';

@Injectable({
  providedIn: 'root'
})
export class BribeService {
  bribes:Bribe[] = [];
  constructor() { }
  getBribes(){
    return this.bribes;
  }
}
