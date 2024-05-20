import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  authUser(user:any){
    debugger;
    let UserArray=[];
    if(localStorage.getItem('Users')){
      UserArray=JSON.parse(localStorage.getItem('Users')||'[]')
    }
    return UserArray.find((p:any)=>p.userName==user.userName && p.password==user.password)
  }
}
