import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import {MatTabsModule} from '@angular/material/tabs'

import {MatFormFieldModule} from '@angular/material/form-field'
import { GaugeModule } from 'angular-gauge';
import {MatSelectModule} from '@angular/material/select';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { DetailsComponent } from './Components/details/details.component';
import { ReleasedComponent } from './Components/released/released.component';
import { CartComponent } from './Components/cart/cart.component';
import { LoginComponent } from './Components/login/login.component';
import { SellerComponent } from './Components/seller/seller.component';
import { TopOfferComponent } from './Components/top-offer/top-offer.component';
import { OrderPlacedComponent } from './Components/order-placed/order-placed.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { SearchProductComponent } from './Components/search-product/search-product.component';
import { GroceryComponent } from './Components/grocery/grocery.component';
import { FashionComponent } from './Components/fashion/fashion.component';
import { MobileComponent } from './Components/mobile/mobile.component';
import { HomeNeededProductComponent } from './Components/home-needed-product/home-needed-product.component';
import { ElectronicsComponent } from './Components/electronics/electronics.component';
import { MyAccountComponent } from './Components/my-account/my-account.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    DetailsComponent,
    ReleasedComponent,
    CartComponent,
    LoginComponent,
    SellerComponent,
    TopOfferComponent,
    OrderPlacedComponent,
    LogoutComponent,
    SearchProductComponent,
    GroceryComponent,
    FashionComponent,
    MobileComponent,
    HomeNeededProductComponent,
    ElectronicsComponent,
    MyAccountComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    GaugeModule.forRoot(),
    MatSelectModule,
    ReactiveFormsModule



    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
