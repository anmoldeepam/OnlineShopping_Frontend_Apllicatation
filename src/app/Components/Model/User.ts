import { Product } from "./Product"

export interface User {
    id:string
    userName:string
    userPassword:string
    name:string
    gender:string
    mobilenumber:string
    cart:string[];
    address:any[]
    sizeAvailed:string
    orders:Product[]
    wishlist:number[]
    
}