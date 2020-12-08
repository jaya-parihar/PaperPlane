import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './vendor.component';
import { RegisterComponent } from '../auth/register/register.component';
import { LoginComponent } from '../auth/login/login.component';

import { AuthGuardGuard } from "../Guards/auth-guard.guard";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from '../Components/dashboard/dashboard.component';
import { AddProductComponent } from '../Components/Product/add-product/add-product.component';

const routes: Routes = [
  { path: '', component: VendorComponent,
 
},
{
  path: 'login',component: LoginComponent
},
{
  path: 'register', component: RegisterComponent
},
{
  path: 'home', component:HomeComponent, canActivate: [AuthGuardGuard],
  children: [
    {
      path: '', component:DashboardComponent
    },
    {
      path: 'products/add-product', component: AddProductComponent
    }
   
  ]
}

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
