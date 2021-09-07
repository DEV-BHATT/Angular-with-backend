import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import{Observable}from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getCustomerDataById: any;
  updateCustomerData: any;

  constructor( private obj:HttpClient) { }
  url="http://loacalhost:3001";
  getCountryList():Observable<object>{


    return this.obj.get(this.url +'Country');
  }

  
  saveCustomerData(data:any): Observable<object>{
   return this.obj.post(this.url + 'users',data);

  }

  getCustomerList():Observable<object>{
    return this.obj.get(this.url + "")
  }
  getcustomerDataById(id:any):Observable<object>{
    return this.obj.get(this.url + "users/"+id)
  }
  updatecustomerData(data:any):Observable<object>{
    return this.obj.post(this.url + "post/id",data);

  }
  deletecustomerData(id:number):Observable<object>{
    return this.obj.get(this.url +"delete/"+id);
    
  }
}
