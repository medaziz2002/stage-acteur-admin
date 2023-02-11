import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { admin } from '../Model/Admin.model';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL :string ="http://localhost:8081/api/admin";
  loggedUser: string;
   helper=new JwtHelperService();

  constructor(private http:HttpClient,private router:Router) { }



  loginAdmin(a:admin){
    return this.http.post<any>(this.apiURL+"/login", a);
  }


  isLoggedIn(){

    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }

  }
  userDetails(){

    let token:any=localStorage.getItem('myToken');
    let decodeToken= this.helper.decodeToken(token);
     return decodeToken.data;
   }





}









