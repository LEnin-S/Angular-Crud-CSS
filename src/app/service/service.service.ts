import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseurl="http://localhost:8765/api/employees"

  constructor(private http:HttpClient) { }

  addprofile(data:any){
    return this.http.post(this.baseurl,data)
  }


}
