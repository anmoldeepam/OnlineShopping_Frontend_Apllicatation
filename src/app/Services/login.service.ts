import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../Components/Model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isloggedin = new Subject<boolean>()

  isSeller = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  logginUser():Observable<User[]>{
    return this.http.get<User[]>(`http://localhost:3000/User`)
  }
}
