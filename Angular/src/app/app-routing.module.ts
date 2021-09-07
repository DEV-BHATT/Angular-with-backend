import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ RegistrationComponent} from '../app/registration/registration.component';
import{AppComponent}from './app.component'
import { from } from 'rxjs';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  {
  path:'registration',component:RegistrationComponent
  },
  {
    path:'home',component:AppComponent
  },
  {
    path:'CustomerList',component:CustomerListComponent
  },
  {
    path:'edit/id',component:RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
