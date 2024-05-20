import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './Service/housing.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { NavBarComponent } from './Property/nav-bar/nav-bar.component';
import { PropertyCardComponent } from './Property/property-card/property-card.component';
import { PropertyDetailsComponent } from './Property/property-details/property-details.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { RentPropertyComponent } from './Property/rent-property/rent-property.component';
import { AlertifyService } from './Service/alertify.service';
import { AuthService } from './Service/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    RentPropertyComponent,
    PropertyDetailsComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports:     [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule,
  BsDropdownModule.forRoot(),TabsModule.forRoot(),ButtonsModule.forRoot(),BsDatepickerModule.forRoot(),



  ],
  providers: [
    HousingService,
    AlertifyService,AuthService,

    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
