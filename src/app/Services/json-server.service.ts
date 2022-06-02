import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartProduct } from '../Components/Model/CartProduct';
import { category } from '../Components/Model/category';
import { Product } from '../Components/Model/Product';
import { Seller } from '../Components/Model/seller';

import { User } from '../Components/Model/User';

@Injectable({
  providedIn: 'root'
})
export class JsonServerService {

  constructor(private http:HttpClient) { }


  getProducts():Observable<Product[]>{
   return this.http.get<Product[]>(`http://localhost:3000/Product`)
  }

  getProductById(id:any):Observable<Product>{
    
    return this.http.get<Product>(`http://localhost:3000/Product/${id}`)
  }

  getUserById(userid:any):Observable<any>{
    return this.http.get<User>(`http://localhost:3000/User/${userid}`)
  }

  putUser(user:User):Observable<any>{
    
    return this.http.put(`http://localhost:3000/User/${user.id}`,user)
  }

  getSeller(id:number):Observable<any>{
    return this.http.get(`http://localhost:3000/seller/${id}`)
  }
  getSellers():Observable<any>{
    return this.http.get(`http://localhost:3000/seller`)
  }

  postCartProduct(cartProduct:CartProduct):Observable<any>{
    return this.http.post(`http://localhost:3000/CartProduct`, cartProduct)
  }

    putSeller(seller:Seller):Observable<any>{
      return this.http.put(`http://localhost:3000/seller/${seller.id}`,seller)
    }

    getCategory():Observable<any>{
      return this.http.get(`http://localhost:3000/category`)
    }

    getCategoryById(id:any):Observable<category>{
    
      return this.http.get<category>(`http://localhost:3000/category/${id}`)
    }

    deleteUserOrder(user:User):Observable<any>{
    
      return this.http.put(`http://localhost:3000/User/${user.id}`,user)
    }
}
