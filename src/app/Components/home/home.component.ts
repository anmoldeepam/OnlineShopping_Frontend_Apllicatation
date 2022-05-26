import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { JsonServerService } from 'src/app/Services/json-server.service';
import { MessageService } from 'src/app/Services/message.service';
import { game } from '../Model/Game';
import { Product } from '../Model/Product';
import { User } from '../Model/User';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firstname='Anmol'
   products!:Product[];
   userId!:any
   user!:User
   

  constructor(
    private router:Router,
    private message:MessageService,
    private jsonServer:JsonServerService,
    private cartService:CartService
    ) {
      this.cartService.username.subscribe(name=>{
        this.username = name
      })
     }
  
 

  ngOnInit(): void {
    this.jsonServer.getProducts().subscribe((product)=>{
    this.products=product
    console.log(product)
    })

    

    

  }
  DetailsPage(id:any){
    this.router.navigate(['/details',id]);
  }

  showSortData(){
    console.log("in show dtat")
  }


  MessageShow(uname:any){

  }

  username!:string

  AddtoCart(product:any){

   
    // OLD and NEW is down (Localstorage ot Session storage)
    // this.jsonServer.getUser(localStorage.getItem('userid')).subscribe((user:User)=>{ 
    this.jsonServer.getUser(sessionStorage.getItem('userid')).subscribe((user:User)=>{
     
      this.user=user

      
      this.user.cart.push(`${product.id}`)
      
      this.jsonServer.putUser(this.user).subscribe((message)=>{
        alert("Added To Cart Successfully")
      })
    })
    

    // this.cartService.username.next(product.name)
    // console.log(this.username)
    // this.router.navigateByUrl("/cart")
    // this.userId = localStorage.getItem('token')
    // console.log(product.id)

    // console.log(product)
    // this.cartService.serviceProduct.next(product.name.value)
    // console.log(this.cartService.serviceProduct)
    
  }

  OpenDetailsPage(productId:any){
    console.log(productId)
    this.router.navigateByUrl(`/details/${productId}`)
  }
 
  TopOffer(){
    this.router.navigateByUrl('/topoffer')
  }
  Grocery(){
    this.router.navigateByUrl('/grocery')
  }
  Electronics(){
    this.router.navigateByUrl('/electronics')
  }
  Fashion(){
    this.router.navigateByUrl('/fashion')
  }
  Mobiles(){
    this.router.navigateByUrl('/mobiles')
  }
  HomeProducts(){
    this.router.navigateByUrl('/homeProducts')
  }

}
