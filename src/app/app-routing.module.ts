import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyDetailsComponent } from './Property/property-details/property-details.component';

const routes: Routes = [{path:"",redirectTo:"propertyList",pathMatch:"full"},
                        {path:"propertyList",component:PropertyListComponent},
                        {path:"add-property",component:AddPropertyComponent},
                        {path:"rent-property",component:PropertyListComponent},
                        {path:"user/register",component:UserRegisterComponent},
                        {path:"user/login",component:UserLoginComponent},
                        {path:"propertydetails/:Id",component:PropertyDetailsComponent},
                        {path:"**",component:PropertyListComponent},
                       
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
