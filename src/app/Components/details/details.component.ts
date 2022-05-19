import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonServerService } from 'src/app/Services/json-server.service';
import { Product } from '../Model/Product';
import { User } from '../Model/User';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
    private _jsonServerService:JsonServerService
    ) { }

    value!:string
    product!:Product
    originalPrice!:any
    productSize!:string[]
    user!:User

  ngOnInit(): void {
  this.value=  this.activatedRoute.snapshot.params['id'];
  
  
  this._jsonServerService.getProductById(this.value).subscribe((product:any)=>{
    this.product=product

    this.originalPrice=((product.price / product.discount)+product.price).toFixed()

    this.productSize=product.size
    
  })
  }

  SelectedSize(value:any){
    this.product.sizeAvailed = value

    console.log(this.product)
  }

  AddToCart(product:any){
    console.log(this.product.sizeAvailed)
    if(this.product.sizeAvailed==''){
      alert("Select a size")
    }
    console.log(this.product)
    this._jsonServerService.getUser(localStorage.getItem('userid')).subscribe((user:User)=>{
     
      this.user=user

      
      this.user.cart.push(`${product.id}`)
      
      this._jsonServerService.putUser(this.user).subscribe((message)=>{
        alert("Added To Cart Successfully")
      })
    })
  }

}

