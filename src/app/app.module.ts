import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
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
    SearchProductComponent
    
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
    MatSelectModule



    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
