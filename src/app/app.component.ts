import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'Gaming_project';
  notLoggedIn:any
  constructor(){
    
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }
}
