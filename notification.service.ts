import { Injectable } from '@angular/core';
import{ToastrService} from 'ngx-toastr' 

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor( private obj :ToastrService) { }
  getSuccess(message:any,title:any){
    this.obj.success(message,title);
  }
  getError(message:any,title:any){
    this.obj.error(message,title);
  }
  getInfo(message:any,title:any){
    this.obj.info(message,title);
  }
  getWarning(message:any,title:any){
    this.obj.warning(message,title);
  }
}
