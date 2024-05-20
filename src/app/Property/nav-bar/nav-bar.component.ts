import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  loggedInUser!: string;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // this.checkLoginStatus();
  }

  loggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      this.loggedInUser = localStorage.getItem("token") ?? "";
      return this.loggedInUser !== ""; // Return true if token is present, false otherwise
    } else {
      return false;
    }
  }

  onLoggedOut(): void {
    localStorage.removeItem("token");
    this.checkLoginStatus(); // Check login status after logout
    // You can display a success message here if needed
    // alertify.success("Logout successful");
  }

  private checkLoginStatus(): void {
    if (this.loggedIn()) {
      // User is logged in, perform actions if needed
      // alertify.success("Logged in successfully");
    } else {
      // User is not logged in
    }
  }
}

