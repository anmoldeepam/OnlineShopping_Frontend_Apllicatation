import { CartProduct } from "./CartProduct"
import { Product } from "./Product"

export interface Seller{
    id:number
    sellerName:string
    email:string,
    password:string
    products:Product[]
    sellerorder:Product[]
}