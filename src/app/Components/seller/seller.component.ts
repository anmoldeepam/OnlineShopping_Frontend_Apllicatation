import { Component, OnInit } from '@angular/core';
import { JsonServerService } from 'src/app/Services/json-server.service';
import { Product } from '../Model/Product';
import { Seller } from '../Model/seller';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private jsonServer:JsonServerService) { }

  sellerId!:any
  seller:Seller = {
    id: 0,
    sellerName: '',
    products: [],
    sellerorder: [] = [],
    email: '',
    password: ''
  }
  productsValue:Product[] =[]

  product!:Product 

  products:Product[]=[]
  NoOrders!:string
  NoOrdersFlag=false

  ngOnInit(): void {
     this.sellerId= localStorage.getItem('sellerId')
     this.jsonServer.getSeller(this.sellerId).subscribe((seller)=>{
       this.seller = seller  
       this.productsValue=this.seller.sellerorder


       for(let product of this.productsValue){
         console.log(product)

         this.products.push(product)
         console.log(this.products)
          this.NoOrdersFlag=false


    //     this.jsonServer.getProductById(i).subscribe((product:Product)=>{
    //       this.product=product
    //       this.products.push(this.product)
    //       this.NoOrdersFlag=false
    //       console.log(this.NoOrdersFlag)
    //     })
        
      }

      if(this.products.length==0){
            this.NoOrdersFlag=true
            console.log(this.NoOrdersFlag)
            this.NoOrders = "There is no Ongoing Order"
      }
     })
    

    
  }


  


}
