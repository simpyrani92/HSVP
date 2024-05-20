import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  addUser(userData: User) {
    debugger;
    let users: User[] = [];
  
    // Retrieve existing users from local storage
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users') || '[]');
    }
  
    // Update the array of users
    users = [userData, ...users];
  
    // Store the updated array in local storage
    localStorage.setItem('Users', JSON.stringify(users));
  }
  
}
