
import { Component, OnInit } from '@angular/core';
import { JsonServerService } from 'src/app/Services/json-server.service';
import { Product } from '../Model/Product';
import { User } from '../Model/User';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css']
})
export class OrderPlacedComponent implements OnInit {

  constructor(
    private jsonServer:JsonServerService
  ) { }

  product: Product ={
    id: 0,
    image: '',
    ExtraImages: [],
    name: '',
    price: 0,
    discount: 0,
    discountPrice: 0,
    description: '',
    offers: '',
    size: [],
    sizeAvailed: '',
    sellerId: 0,
    sellerName: '',
    details: '',
    reviews: '',
    categoryId: 0,
    QandA: '',
    cart: [],
    color: '',
    brand: '',
    address: undefined
  }
  user!:User

  ngOnInit(): void {
    this.jsonServer.getUserById(sessionStorage.getItem('userid')).subscribe(user =>{
      this.user = user
      console.log(user)
      this.product = user.orders.pop() 
      
      
    })
    
  }

  CancelOrder(){
    // this.user.orders = this.user.orders.splice(this.user.orders.findIndex(a=> a.id===this.product.id))
    // console.log(this.user)
    // this.jsonServer.deleteUserOrder(this.user)
  }

}
