import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonServerService } from 'src/app/Services/json-server.service';
import { LoginService } from 'src/app/Services/login.service';
import { CartComponent } from '../cart/cart.component';

import { Product } from '../Model/Product';
import { Seller } from '../Model/seller';
import { User } from '../Model/User';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private _jsonServerService: JsonServerService,
    private _loginService: LoginService,
    private router: Router,
    private jsonServer: JsonServerService
  ) { }

  value!: string
  product: Product = {
    id: 0,
    image: '',
    ExtraImages: [],
    name: '',
    price: 0,
    discount: 0,
    description: '',
    offers: '',
    size: [],
    sizeAvailed: '',
    sellerId: 0,
    sellerName: '',
    details: '',
    reviews: '',
    QandA: '',
    cart: [],
    categoryId: 0,
    color: '',
    brand: '',
    discountPrice: 0,
    address: undefined
  }
  offerPrice!: any
  productSize!: string[]
  user!: User
  LoginUser: User[] = []
  notloggedIn: boolean = false
  sellers!: Seller[]
  CartProduct: Product = {
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
  backgroundColor!: string
  color!: string
  AddToCartButton: boolean = false
  WishListButton: boolean = false
  toastValue!:string
  toastValuetrue!:string
  Wishlist!:string 


  ngOnInit(): void {
    this.value = this.activatedRoute.snapshot.params['id'];


    this._jsonServerService.getProductById(this.value).subscribe((product: any) => {
      this.product = product

      console.log(this.product.price * (this.product.discount / 100))
      // this.originalPrice=(((product.price / 100)*product.discount)+product.price).toFixed()
      this.offerPrice = (this.product.price - (this.product.price * (this.product.discount / 100))).toFixed()

      this.productSize = product.size
    })

    this.jsonServer.getUserById(sessionStorage.getItem('userid')).subscribe(User => {
      if (User.wishlist.forEach((val: any) => {
        if (val == this.product.id) {
          this.backgroundColor = "Black"
          this.color = "White"
          this.Wishlist = "Wishlisted"
        }
        this.Wishlist = "Wishlist"
      }))
      console.log()
    })
  }

  SelectedSize(value: any) {
    this.product.sizeAvailed = value

    console.log(this.product)
  }

  AddToCart(product: any) {
    this.CartProduct = product

    if (sessionStorage.getItem('userid') == null) {
      this.AddToCartButton = true
      document.getElementById('ModelButton')?.click()

    }
    else {
      this._jsonServerService.getUserById(sessionStorage.getItem('userid')).subscribe((user: User) => {

        this.user = user
        this.user.cart.push(`${product.id}`)
        this._jsonServerService.putUser(this.user).subscribe((message) => {
          this.router.navigateByUrl('/cart')
        })
      })
    }
  }

  ImageReplace(image: any) {
    this.product.image = image
  }


  login(form: NgForm) {

    this._loginService.logginUser().subscribe(users => {
      this.LoginUser = users

      for (let i = 0; i < this.LoginUser.length; i++) {
        if (form.value.username == this.LoginUser[i].userName && form.value.password == this.LoginUser[i].userPassword) {
          // OLD and NEW is down (Localstorage ot Session storage)
          //localStorage.setItem('userid',this.Users[i].id)
          sessionStorage.setItem('userid', this.LoginUser[i].id)
          this.notloggedIn = false
          console.log(this.notloggedIn)
          this._loginService.isSeller.next(false)
          this._loginService.isloggedin.next(true)
          document.getElementById('CloseModelButton')?.click()
          if (this.AddToCartButton == true) {
            console.log('In cart')
            this.AddToCart(this.CartProduct)
            break;

          }
          else if (this.WishListButton == true) {
            console.log('In wish')
            this.WishList()
            break;
          }




        }
      }
    })
    this.jsonServer.getSellers().subscribe((sellers) => {
      this.sellers = sellers
      console.log(this.sellers)
      for (let i = 0; i < this.sellers.length; i++) {
        if (form.value.username == this.sellers[i].email && form.value.password == this.sellers[i].password) {

          // OLD and NEW is down (Localstorage ot Session storage)
          //localStorage.setItem('sellerId',this.sellers[i].id.toString()) 
          sessionStorage.setItem('sellerId', this.sellers[i].id.toString())
          this.notloggedIn = false
          this._loginService.isloggedin.next(true)
          this._loginService.isSeller.next(true)
          this.router.navigateByUrl('/seller')
          break;
        }
        else {
          this.notloggedIn = true
        }
      }
    })
    // this.Users.forEach(user=>{
    //   if(form.value.username==user.userName && form.value.password==user.userPassword){
    //     localStorage.setItem('userid' , '1')
    //     console.log("before flag")
    //     this.notloggedIn = false
    //     console.log(this.notloggedIn)
    //     this._loginService.isAdmin.next(true)
    //     this._loginService.isloggedin.next(true)
    //     this.router.navigateByUrl('/home')   

    //   }
    //   else{
    //     this.notloggedIn=true
    //   } 
    // })

    if (this.notloggedIn) {
      alert("User Name or Password is Incorrect ")
    }


  }
  WishList() {
    console.log("We Are at Whishlist function")

    if (sessionStorage.getItem('userid') == null) {
      this.WishListButton = true
      document.getElementById('ModelButton')?.click()

    }
    else {

      if (this.backgroundColor == undefined || this.backgroundColor == "White") {
        this.backgroundColor = "Black"
        this.color = "White"
        this.Wishlist = "Wishlisted"

        this.jsonServer.getUserById(sessionStorage.getItem('userid')).subscribe(User => {
          User.wishlist.push(this.product.id)
          this.jsonServer.putUser(User).subscribe(putUser => {
            setTimeout(() => {
              this.toastValuetrue =""
            }, 2000);
            this.toastValuetrue ="show"
            this.toastValue =""
          })
        }

        )


      }
      else {

        this.jsonServer.getUserById(sessionStorage.getItem('userid')).subscribe(User => {
          
          User.wishlist.pop()
          this.jsonServer.putUser(User).subscribe(putUser => {
            setTimeout(() => {
              this.toastValue =""
            }, 2000);
            this.toastValue ="show"
            this.toastValuetrue =""
          })

        this.backgroundColor = "White"
        this.color = "Black"
        this.Wishlist = "Wishlist"
        })
      }


    }

  }
}

