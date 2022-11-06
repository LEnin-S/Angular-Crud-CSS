import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { profile } from '../data/profile';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseurl="http://localhost:8765/api/employees"

  constructor(private http:HttpClient) { }

  addprofile(data:any){
    return this.http.post(this.baseurl,data)
  }

  showprofile(){
    return this.http.get<profile[]>(this.baseurl)
  }

}
