import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonServerService } from 'src/app/Services/json-server.service';
import { LoginService } from 'src/app/Services/login.service';
import { Seller } from '../Model/seller';
import { User } from '../Model/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService:LoginService,
    private router:Router,
    private jsonServer:JsonServerService
    
    ) { }

    Users!:User[]
    User!:any
    notloggedIn:boolean = false
    sellers!:Seller[]

  ngOnInit(): void {
  }

  login(form:NgForm){

    this._loginService.logginUser().subscribe(users=>{
      this.Users = users

      for(let i=0;i<this.Users.length;i++){
        if(form.value.username==this.Users[i].userName && form.value.password==this.Users[i].userPassword){
         // OLD and NEW is down (Localstorage ot Session storage)
          //localStorage.setItem('userid',this.Users[i].id)
          sessionStorage.setItem('userid',this.Users[i].id)
          this.notloggedIn = false
          console.log(this.notloggedIn)
          this._loginService.isSeller.next(false)
          this._loginService.isloggedin.next(true)
          this.router.navigateByUrl('/home')  
          break;
                
        }
      
        
      }

      })
      this.jsonServer.getSellers().subscribe((sellers)=>{
        this.sellers = sellers
        console.log(this.sellers)
      
          for(let i=0;i<this.sellers.length;i++){
            
         if(form.value.username==this.sellers[i].email && form.value.password==this.sellers[i].password){
          
          // OLD and NEW is down (Localstorage ot Session storage)
          //localStorage.setItem('sellerId',this.sellers[i].id.toString()) 
          sessionStorage.setItem('sellerId',this.sellers[i].id.toString()) 
          this.notloggedIn = false
          this._loginService.isloggedin.next(true)
          this._loginService.isSeller.next(true)
          this.router.navigateByUrl('/seller')
          break;
        }
     
        else{
          this.notloggedIn=true
        }
      }
      })
        
      

      // this.Users.forEach(user=>{
      //   if(form.value.username==user.userName && form.value.password==user.userPassword){
      //     localStorage.setItem('userid' , '1')
      //     console.log("before flag")
      //     this.notloggedIn = false
      //     console.log(this.notloggedIn)
      //     this._loginService.isAdmin.next(true)
      //     this._loginService.isloggedin.next(true)
      //     this.router.navigateByUrl('/home')   
                
      //   }
      //   else{
      //     this.notloggedIn=true
      //   } 
      // })

      if(this.notloggedIn){
        alert("User Name or Password is Incorrect ")
      }
   
    }
    
   
  
  loginFunction(form:NgForm){
    if(form.value.username==this.User.userName && form.value.password==this.User.userPassword){
      // OLD and NEW is down (Localstorage ot Session storage)
     // localStorage.setItem('token' , '1')
     sessionStorage.setItem('token' , '1')
      this._loginService.isSeller.next(true)
      this._loginService.isloggedin.next(true)
      this.router.navigateByUrl('/home')
      
    }
    else if(form.value.username==this.User.userName && form.value.password==this.User.userPassword){
      // OLD and NEW is down (Localstorage ot Session storage)
     // localStorage.setItem('token' , '2')
     sessionStorage.setItem('token' , '2')
      this._loginService.isloggedin.next(true)
      this.router.navigateByUrl('/home')
    
    }
    else{
      alert("UserName or Password is Wrong")
    }
  }

}
