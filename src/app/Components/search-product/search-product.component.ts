import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';
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
    private messageService: MessageService,
    private route: ActivatedRoute
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
    cart: [],
    color: '',
    brand: '',
    discountPrice: 0,
    address: undefined
  }

  searchName: string = ''
  category: category[] = []

  categoryName: string[] = []
  Allproducts: Product[] = []
  alljsonProduct:Product[] = []

  ngOnInit(): void {

    this.jsonServer.getProducts().subscribe((alljsonProduct:Product[]) =>{
      this.alljsonProduct = alljsonProduct
    })

    this.searchName = this.route.snapshot.paramMap.get('searchValue') || ''

    this.jsonServer.getCategory().subscribe((category) => {

      for (let i = 0; i < category.length; i++) {
        this.categoryName.push(category[i].name)
      }
    })

    this.jsonServer.getProducts().subscribe((products) => {

      products.forEach(product => {
        if (product.name.toLowerCase().search(this.searchName.toLowerCase()) >= 0) {
          if (!this.products.includes(product)) {
            this.products.push(product)
            this.Allproducts.push(product)
          }
        }
        else if (product.description.toLowerCase().search(this.searchName.toLowerCase()) >= 0) {
          if (!this.products.includes(product)) {
            this.products.push(product)
            this.Allproducts.push(product)
          }
        }
        else if (product.details.toLowerCase().search(this.searchName.toLowerCase()) >= 0) {
          if (!this.products.includes(product)) {
            this.products.push(product)
            this.Allproducts.push(product)
          }
        }
        this.jsonServer.getCategoryById(product.categoryId).subscribe((categoryValue) => {
          if (categoryValue.name.toLowerCase().search(this.searchName.toLowerCase()) >= 0) {
            if (!this.products.includes(product)) {
              this.products.push(product)
              this.Allproducts.push(product)
            }
          }
        })

      })
    }
    )
  }

  OpenDetailsPage(productId: any) {

    this.router.navigateByUrl(`/details/${productId}`)
  }

  radio(event: any) {
    console.log(event.target.value)
    if (event.target.value == "T-Shirt" ||
      event.target.value == "Shirt" ||
      event.target.value == "Mobile" ||
      event.target.value == "Electronics" ||
      event.target.value == "BottomWear" ||
      event.target.value == "Shoes" ||
      event.target.value == "Sliders" ||
      event.target.value == "Home") {
      this.products = []
      
     this.alljsonProduct.forEach(Oneproduct => {
        this.jsonServer.getCategoryById(Oneproduct.categoryId).subscribe(categoryVal => {
          if (categoryVal.name.toLowerCase() == event.target.value.toLowerCase()) {
            this.products.push(Oneproduct)
          }
        })
      
    })
    }

    else if (event.target.value == "0-500" ||
      event.target.value == "501-1000" ||
      event.target.value == "1001-1500" ||
      event.target.value == "1501-2000" ||
      event.target.value == "200 & Above") {

      this.products = []
      let valueFirst = event.target.value.toString().split("-")[0]
      let valueLast = event.target.value.toString().split("-")[1]

      this.alljsonProduct.forEach(Oneproduct => {

        if (Oneproduct.price > parseInt(valueFirst) && Oneproduct.price <= parseInt(valueLast)) {
          this.products.push(Oneproduct)
        }

      })
    }

    else if (
      event.target.value == "Red" ||
      event.target.value == "Blue" ||
      event.target.value == "Green" ||
      event.target.value == "Yellow" ||
      event.target.value == "Black"
    ) {
      this.products = []
      this.alljsonProduct.forEach(Oneproduct => {
        console.log(Oneproduct)
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

      this.alljsonProduct.forEach(Oneproduct => {
        if (Oneproduct.discount > parseInt(valueFirst) && Oneproduct.discount <= parseInt(valueLast)) {
          this.products.push(Oneproduct)
        }
        if(event.target.value == "70 % and Above" && Oneproduct.discount > parseInt(valueFirst) ){
          this.products.push(Oneproduct)
        }
      })
      
    }
  }


}

