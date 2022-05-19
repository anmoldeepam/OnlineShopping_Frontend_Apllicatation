import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../Components/Model/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new Subject<Product[]>();
  serviceProduct = new Subject<string>();

  username = new Subject<any>();

  constructor() {
    
   }
}
