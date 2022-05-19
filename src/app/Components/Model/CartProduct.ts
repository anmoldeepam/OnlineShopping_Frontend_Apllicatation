import { Product } from "./Product"

export interface CartProduct{
    id:number
    products:Product[]
    userid:string
    userAddress:string
    size:string
    // product:Product
}