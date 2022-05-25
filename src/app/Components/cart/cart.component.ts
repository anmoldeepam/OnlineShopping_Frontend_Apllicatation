import { coerceStringArray } from '@angular/cdk/coercion';
import { AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { throttleTime } from 'rxjs';
import { CartService } from 'src/app/Services/cart.service';
import { JsonServerService } from 'src/app/Services/json-server.service';
import { CartProduct } from '../Model/CartProduct';
import { Product } from '../Model/Product';
import { Seller } from '../Model/seller';
import { User } from '../Model/User';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private jsonServer: JsonServerService,
    private router :Router
    ) {

  }
  user!: User
  products: Product[] = []
  product: Product={
    id: 0,
    image: '',
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
    ExtraImages: [],
    categoryId: 0,
    color: '',
    brand: ''
  }
  totalPrice:number =0
  totalPriceAfterAddingDeliveryCharges:number=0
  idString!:string
  sellerName!:string[]
  // cartProduct:CartProduct = {
  //   id:0,
  //   size:'',
  //   userAddress:'',
  //   userid:''
  // }

  // cartProducts:CartProduct[] = []

  seller: Seller ={
    id: 0,
    sellerName: '',
    products: [],
    sellerorder: [],
    email: '',
    password: ''
  }

  sellers:Seller[] = []

  cartProduct:CartProduct ={
    id: 0,
    products: [],
    userid: '',
    userAddress: '',
    size: ''
  }

  productSize:any
  NoProductFlag:boolean = false

  ngOnInit(): void {

    
// OLD and NEW is down (Localstorage ot Session storage)
    // this.jsonServer.getUser(localStorage.getItem('userid')).subscribe((user: User) => {
    //   this.user = user
    //   this.cartProduct.userid = user.id
      
    // })
    this.jsonServer.getUser(sessionStorage.getItem('userid')).subscribe((user: User) => {
      this.user = user
      this.cartProduct.userid = user.id
     // console.log(this.user.cart)
      if(this.user.cart.length == 0){
        this.NoProductFlag = true
      }
      
    })

    setTimeout(() => {
      for (let i = 0; i < this.user.cart.length; i++) {
        this.jsonServer.getProductById(this.user.cart[i]).subscribe((product) => {
          this.productSize = product.size
         this.products.push(product)
          this.cartProduct.products.push(product)
          this.totalPrice += product.price
          
          //console.log(product)
        })
      }
    }, 500);
    setTimeout(() => {
    this.totalPriceAfterAddingDeliveryCharges = this.totalPrice+50
    
    }, 1200);

    
  }

  RemoveItemFromCart(id:any){
   
   let index =this.user.cart.indexOf(id.toString())
   this.user.cart.splice(index,1)
  this.jsonServer.putUser(this.user).subscribe((value)=>{
      alert("item Deleted Succesfully")
      this.RefreshPage()
  })
  }

  RefreshPage(){

// OLD and NEW is down (Localstorage ot Session storage)
// this.jsonServer.getUser(localStorage.getItem('userid')).subscribe((user: User) => {
      
//   this.user = user
// })
    this.jsonServer.getUser(sessionStorage.getItem('userid')).subscribe((user: User) => {
      
      this.user = user
    })

    setTimeout(() => {
      this.products=[]
      this.totalPrice=0
      this.totalPriceAfterAddingDeliveryCharges = 0
      for (let i = 0; i < this.user.cart.length; i++) {
        this.jsonServer.getProductById(this.user.cart[i]).subscribe((product) => {
         
          this.products.push(product)
          this.totalPrice += product.price
          
        })
        
      }
      
      
    }, 500);

  
   

    setTimeout(() => {
     
      
    this.totalPriceAfterAddingDeliveryCharges = this.totalPrice+50

    }, 1200);

   

  }

  selectSize(size:any,product:Product){
  //  this.product.sizeAvailed = size
// console.log(typeof(size))
// console.log(typeof(this.product.sizeAvailed))
    //console.log(this.product.sizeAvailed)

    // this.cartProduct.id=product.id
    // this.cartProduct.userid = this.user.id
    // this.cartProduct.size = size

    // console.log(this.cartProduct)
    
  

    // console.log(this.cartProducts)

    console.log(size)

    // this.jsonServer.getSeller(product.sellerId).subscribe((seller:Seller)=>{
      
    //     seller.sellerorder.push(product.id)
       

    //     this.seller.id = seller.id
    //     this.seller.products = seller.products
    //     this.seller.sellerName =seller.sellerName
    //     this.seller.sellerorder =seller.sellerorder

    //     this.AddSeller(this.seller)
    //   console.log(this.sellers)
        
        
        
    // })
  }

  AddSeller(seller:Seller){
    this.sellers.push(seller)
  }

  // PlaceOrder(){
   
  
  //   console.log(this.seller)
  //   this.jsonServer.putSeller(this.seller).subscribe((seller)=>{
  //     alert("Order PLaced")
  // })
  // }

  SelectedSize(value:any,product:Product){
    
    product.sizeAvailed=value
   // console.log(this.cartProduct)
    //   this.cartProduct.products.push(product)
  
    // console.log(this.cartProduct)
  }

  PlaceOrder(){
    console.log(this.cartProduct)
    this.cartProduct.products.forEach(product =>{
      if(product.sizeAvailed == ''){
        alert("Please Select Size")
        
      }
      console.log(product)
      this.jsonServer.getSeller(product.sellerId).subscribe((seller)=>{
        console.log("before Ordering")
          seller.sellerorder.push(product)
          this.jsonServer.putSeller(seller).subscribe((sellerVal)=>{
            console.log(sellerVal)
          })
          console.log("After Pushed")
          this.router.navigateByUrl("/orderPlaced")
      })
     })
  }
}
