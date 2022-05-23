import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  uname = new Subject<string>();

  searchValue = new Subject<string>();

  constructor() { }

  ShowMessage(){
    alert("Thanks for subscribing")
  }
}
