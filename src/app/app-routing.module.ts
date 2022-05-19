import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { DetailsComponent } from './Components/details/details.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ReleasedComponent } from './Components/released/released.component';
import { SellerComponent } from './Components/seller/seller.component';

const routes: Routes = [
  {
    path:'',
  component : LoginComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
