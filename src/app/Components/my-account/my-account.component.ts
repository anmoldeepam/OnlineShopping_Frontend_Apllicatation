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
    private jsonServer :JsonServerService,
    private router:Router
  ) { }
  AccountBoolean:boolean = true
  OrderBoolean:boolean = false
  AccountForm!:FormGroup
  products:Product[] =[]
  user:User={
    id: '',
    userName: '',
    userPassword: '',
    name: '',
    gender: '',
    mobilenumber: '',
    cart: [],
    address: [],
    sizeAvailed: '',
    orders: []
  }

  ngOnInit(): void {

this.AccountForm = new FormGroup({
  FirstName:new FormControl(''),
  Gender: new FormControl(''),
  Email: new FormControl(''),
  Mobile: new FormControl('')
})

    this.jsonServer.getUserById(sessionStorage.getItem('userid')).subscribe(user =>{
      this.user=user
      this.AccountForm.controls['FirstName'].setValue(this.user.name)
      this.AccountForm.controls['Gender'].setValue(this.user.gender)
      this.AccountForm.controls['Email'].setValue(this.user.userName)
      this.AccountForm.controls['Mobile'].setValue(this.user.mobilenumber)
    })

    
  }

  MYOrders(){
    this.AccountBoolean=false
    this.OrderBoolean = true

    this.products = this.user.orders
    console.log(this.products)

  }
  MYAccount(){
    this.AccountBoolean=true
    this.OrderBoolean = false
    
  }
  Logout(){

sessionStorage.removeItem('userid')
this.router.navigateByUrl('/home')
  }
  RateAndReview(){
    console.log("in Rate")
  }
  

}
