import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from 'src/app/Services/cart.service';
import { JsonServerService } from 'src/app/Services/json-server.service';
import { MessageService } from 'src/app/Services/message.service';
import { DetailsComponent } from '../details/details.component';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']

})
export class SearchBarComponent implements OnInit {

  username!: string
  @ViewChild('inputValue') 
  SearchValue!:ElementRef;

  constructor(private _messageService: MessageService,
    private cartService: CartService,
    private jsonService: JsonServerService,
    private router:Router,
    private messageService:MessageService
  ) {
    // this.cartService.username.subscribe(name=>{
    //   this.username = name
    // })
  }

  ngOnInit(): void {
    // OLD and NEW is down (Localstorage ot Session storage)
    // this.jsonService.getUser(localStorage.getItem('userid')).subscribe((user)=>{
    if (sessionStorage.getItem('userid') == null) {
      this.username = 'Login'
    }
    else {
      this.jsonService.getUser(sessionStorage.getItem('userid')).subscribe((user) => {
        this.username = user.userName.split("@")[0]
        this.username = this.username.charAt(0).toUpperCase() + this.username.slice(1)

      })
    }

    

  }

  Login(){
    this.router.navigateByUrl('/login')
  }

  Search(event:any){

    if(event.key == "Enter"){
    const valueInput = this.SearchValue.nativeElement.value
          this.messageService.searchValue = this.SearchValue.nativeElement.value
          console.log(this.messageService.searchValue)
          this.router.navigateByUrl(`/search/${valueInput}`)
  }
}
 

  


}
