import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { DetailsComponent } from './Components/details/details.component';
import { ElectronicsComponent } from './Components/electronics/electronics.component';
import { FashionComponent } from './Components/fashion/fashion.component';
import { GroceryComponent } from './Components/grocery/grocery.component';
import { HomeNeededProductComponent } from './Components/home-needed-product/home-needed-product.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MobileComponent } from './Components/mobile/mobile.component';
import { MyAccountComponent } from './Components/my-account/my-account.component';
import { OrderPlacedComponent } from './Components/order-placed/order-placed.component';
import { ReleasedComponent } from './Components/released/released.component';
import { SearchProductComponent } from './Components/search-product/search-product.component';
import { SellerComponent } from './Components/seller/seller.component';
import { TopOfferComponent } from './Components/top-offer/top-offer.component';

const routes: Routes = [
  {
    path:'',
  component : HomeComponent
  },
  {
    path:'home',
  component : HomeComponent
  },
  {
    path:'details/:id',
    component:DetailsComponent
  },
  {
    path:'details',
    component:DetailsComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'seller',
    component:SellerComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'topoffer',
    component:TopOfferComponent
  },
  {
    path:'orderPlaced',
    component:OrderPlacedComponent
  },
  {
    path:'search/:searchValue',
    component:SearchProductComponent
  },
  {
    path:'grocery',
    component:GroceryComponent
  },
  {
    path:'electronics',
    component:ElectronicsComponent
  },
  {
    path:'fashion',
    component:FashionComponent
  },
  {
    path:'mobiles',
    component:MobileComponent
  },
  {
    path:'homeProducts',
    component:HomeNeededProductComponent
  },
  {
    path:'MyAccount',
    component:MyAccountComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
