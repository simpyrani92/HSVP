import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../Service/auth.service';

import * as alertify from 'alertifyjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  userName!: string;
  password!: string;
isdisabled=false;
constructor(private auth: AuthService,private router:Router){}
  onLogin(loginForm: NgForm) {
    console.log('Form submitted:', loginForm.value);
   const token= this.auth.authUser(loginForm.value);
    if(token){
      debugger
      localStorage.setItem('token',token.userName);
    //  alertify.success("log in successfully");
     console.log("login Successfully")
     this.router.navigate(['/'])

    }
    else{

      //  alertify.error("Kindly provide me valid information");
    }
  }
}
