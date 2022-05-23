import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { DetailsComponent } from './Components/details/details.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
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
    path:'Released',
    component:ReleasedComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
