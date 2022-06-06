import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { JsonServerService } from 'src/app/Services/json-server.service';
import { Product } from '../Model/Product';
import { User } from '../Model/User';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(
    private jsonServer: JsonServerService,
    private router: Router
  ) { }
  AccountBoolean: boolean = true
  OrderBoolean: boolean = false
  wishListBoolean: boolean = false
  AccountForm!: FormGroup
  products: Product[] = []
  wishlistProducts: Product[] = []
  localwishlist: number[] = []
  wishprodId: number[] = []
  alreadyClicked:boolean = false
  user: User = {
    id: '',
    userName: '',
    userPassword: '',
    name: '',
    gender: '',
    mobilenumber: '',
    cart: [],
    address: [],
    sizeAvailed: '',
    orders: [],
    wishlist: []
  }

  ngOnInit(): void {

    this.AccountForm = new FormGroup({
      FirstName: new FormControl(''),
      Gender: new FormControl(''),
      Email: new FormControl(''),
      Mobile: new FormControl('')
    })

    this.jsonServer.getUserById(sessionStorage.getItem('userid')).subscribe(user => {
      this.user = user
      this.AccountForm.controls['FirstName'].setValue(this.user.name)
      this.AccountForm.controls['Gender'].setValue(this.user.gender)
      this.AccountForm.controls['Email'].setValue(this.user.userName)
      this.AccountForm.controls['Mobile'].setValue(this.user.mobilenumber)
    })


  }

  MYOrders() {
    this.AccountBoolean = false
    this.OrderBoolean = true
    this.wishListBoolean = false

    this.products = this.user.orders
    console.log(this.products)

  }
  MYAccount() {
    this.AccountBoolean = true
    this.OrderBoolean = false
    this.wishListBoolean = false

  }
  Logout() {

    sessionStorage.removeItem('userid')
    this.router.navigateByUrl('/home')
  }
  RateAndReview() {
    console.log("in Rate")
  }
  wishList() {

    this.AccountBoolean = false
    this.wishListBoolean = true
    this.OrderBoolean = false
   this.localwishlist = this.user.wishlist
    console.log(this.localwishlist)
    if(this.alreadyClicked == false){
    this.localwishlist.forEach(eachUser => {
      this.jsonServer.getProductById(eachUser).subscribe((product: Product) => {
            this.alreadyClicked =true
            this.wishlistProducts.push(product)
      })

    })
  }

  }

  RemoveFromWishList(product: Product) {
    this.wishlistProducts = this.wishlistProducts.filter(prod => {

      return prod.id != product.id
    })
    this.wishlistProducts.forEach(prod => {
      this.wishprodId.push(prod.id)
    })
    this.user.wishlist = this.wishprodId
    console.log(this.user)
    this.jsonServer.putUser(this.user).subscribe()
  }

}
