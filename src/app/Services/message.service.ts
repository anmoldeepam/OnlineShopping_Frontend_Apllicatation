import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  uname = new Subject<string>();

  searchValue = new Subject<string>();

  OrderPlacedFlag:boolean = false

  constructor() { }

  ShowMessage(){
    alert("Thanks for subscribing")
  }
}
