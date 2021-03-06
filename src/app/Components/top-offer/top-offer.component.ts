import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { JsonServerService } from 'src/app/Services/json-server.service';
import { MessageService } from 'src/app/Services/message.service';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-top-offer',
  templateUrl: './top-offer.component.html',
  styleUrls: ['./top-offer.component.css']
})
export class TopOfferComponent implements OnInit {

  constructor(
    private jsonServer:JsonServerService,
    private router:Router
  ) { }

  products:Product[]=[]
  Allproducts:Product[]=[]
  NoProducts!:string
  NoProductsBoolean!:boolean
  DiscountPrice:any

  ngOnInit(): void {



    this.jsonServer.getProducts().subscribe(products =>{
      
      products.forEach(product =>{
       if( product.discount >30){
         this.products.push(product)
         this.Allproducts.push(product)
         console.log(product.price)
         this.DiscountPrice =(product.price - (product.price*(product.discount/100))).toFixed()
         product.discountPrice=this.DiscountPrice
       }
      })
    })

    console.log(this.products)
    console.log(this.Allproducts)
  }

  OpenDetailsPage(productId: any) {

    this.router.navigateByUrl(`/details/${productId}`)
  }

  // radio(event:any){}

  radio(event: any) {

    this.NoProductsBoolean = false

    if (event.target.value == "T-Shirt" ||
      event.target.value == "Shirt" ||
      event.target.value == "Mobile" ||
      event.target.value == "Electronics" ||
      event.target.value == "BottomWear" ||
      event.target.value == "Shoes" ||
      event.target.value == "Sliders") {
      this.products = []
      console.log(this.Allproducts)
      this.Allproducts.forEach(Oneproduct => {
        this.jsonServer.getCategoryById(Oneproduct.categoryId).subscribe(categoryVal => {

          if (categoryVal.name.toLowerCase() == event.target.value.toLowerCase()) {
            this.products.push(Oneproduct)
          }
          
        })
        
      })
      
    //   if(this.products.length == 0){
    //   this.NoProductsBoolean = true
    //   this.NoProducts= "No Product in this Category"
    // }
      
    }

    else if (event.target.value == "0-500" ||
      event.target.value == "501-1000" ||
      event.target.value == "1001-1500" ||
      event.target.value == "1501-2000" ||
      event.target.value == "2000 & Above") {

      this.products = []
      let valueFirst = event.target.value.toString().split("-")[0]
      let valueLast = event.target.value.toString().split("-")[1]

      this.Allproducts.forEach(Oneproduct => {

        console.log(Oneproduct.price>parseInt(valueFirst))
        if (Oneproduct.discountPrice >= parseInt(valueFirst) && Oneproduct.discountPrice <= parseInt(valueLast)) {
          this.products.push(Oneproduct)
        }

      })
    }

    else if (
      event.target.value == "Red" ||
      event.target.value == "Blue" ||
      event.target.value == "Green" ||
      event.target.value == "Orange" ||
      event.target.value == "Black"
    ) {
      this.products = []
      this.Allproducts.forEach(Oneproduct => {
        if (Oneproduct.color.toString() == event.target.value.toString()) {
          this.products.push(Oneproduct)
        }
      })
    }

    else if(
      event.target.value == "0-10 %" ||
      event.target.value == "11-20 %" ||
      event.target.value == "21-30 %" ||
      event.target.value == "31-40 %" ||
      event.target.value == "41-50 %" ||
      event.target.value == "51-60 %" ||
      event.target.value == "61-70 %" ||
      event.target.value == "70 % and Above" 
    ){
      this.products = []

      let valueFirst = event.target.value.toString().split("-")[0]
      let valueLast = event.target.value.toString().split("-")[1]

      console.log(event.target.value.toString().split("-")[1])
      console.log(event.target.value.toString().split("-")[0])

      this.Allproducts.forEach(Oneproduct => {
        if (Oneproduct.discount >= parseInt(valueFirst) && Oneproduct.discount <= parseInt(valueLast)) {
          this.products.push(Oneproduct)
        }
        if(event.target.value == "70 % and Above"  && Oneproduct.discount >= parseInt(valueFirst) ){
          this.products.push(Oneproduct)
        }
      })
    }
   
   setTimeout(() => {
    if(this.products.length == 0){
      this.NoProductsBoolean = true
      this.NoProducts= "No Product in this Category"
    }
   }, 100);
  }

}
