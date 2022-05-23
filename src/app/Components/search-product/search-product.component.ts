import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonServerService } from 'src/app/Services/json-server.service';
import { MessageService } from 'src/app/Services/message.service';
import { category } from '../Model/category';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {


  constructor(
    private jsonServer: JsonServerService,
    private router: Router,
    private messageService:MessageService,
    private route:ActivatedRoute
  ) { }

  products: Product[] = []
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
    categoryId: 0,
    QandA: '',
    cart: []
  }

searchName:string = ''
category:category[] =[]

categoryName:string[] =[]

  ngOnInit(): void {
    
    this.searchName = this.route.snapshot.paramMap.get('searchValue') || ''

    this.jsonServer.getCategory().subscribe((category)=>{
      
      for(let i=0;i<category.length;i++){
        this.categoryName.push(category[i].name)
      }      
    })
 
    this.jsonServer.getProducts().subscribe((products) => { 

      products.forEach(product => {
        if (product.name.toLowerCase().search(this.searchName.toLowerCase()) >= 0) {
          if(!this.products.includes(product)){
          this.products.push(product)
          }
        }
        else if (product.description.toLowerCase().search(this.searchName.toLowerCase()) >= 0) {
          if(!this.products.includes(product)){
            this.products.push(product)
            }
        }
        else if (product.details.toLowerCase().search(this.searchName.toLowerCase()) >= 0) {
          if(!this.products.includes(product)){
            this.products.push(product)
            }
        }
        this.jsonServer.getCategoryById(product.categoryId).subscribe((categoryValue)=>{
          if(categoryValue.name.toLowerCase().search(this.searchName.toLowerCase())>=0){
            if(!this.products.includes(product)){
              this.products.push(product)
              }
          }
        })
 
      })
    }
    )
  }

  OpenDetailsPage(productId: any) {
  //  console.log(productId)
    this.router.navigateByUrl(`/details/${productId}`)
  }
}
