import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { MessageService } from 'src/app/Services/message.service';
import { DetailsComponent } from '../details/details.component';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']

})
export class SearchBarComponent   {

  username!:string

  constructor(private _messageService:MessageService,
    private cartService:CartService
    ){
    this.cartService.username.subscribe(name=>{
      this.username = name
    })
    
  }

  





}
