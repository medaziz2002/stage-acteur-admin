import { admin } from './../Model/Admin.model';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiURL: string = 'http://localhost:8081/api/admin';

  admins!:admin[];

  constructor(private http:HttpClient)
  {

  }
  

  listeAdmin():Observable<admin[]>{
    return this.http.get<admin[]>(this.apiURL);
   }

ajouterAdmin(x:admin):Observable<admin>{
  //httpOptions pour lui dit sous la forme json
  return this.http.post<admin>(this.apiURL+"/registerAdmin", x, httpOptions);
}

supprimerAdmin(id:number)
{
  const url=`${this.apiURL}/${id}`;
  return this.http.delete(url,httpOptions);
}

consulterAdmin(id :number):Observable<admin>
{
const url=`${this.apiURL}/${id}`;
return this.http.get<admin>(url);
}

modifierAdmin(a:admin):Observable<admin>
{
  const url=`${this.apiURL}/${a.id}`;
  return this.http.put<admin>(url, a,httpOptions);
}



/*addNewAdmin(admin:Admin){
  return this.http.post<any>(this.apiUrl+"/admin", admin);
}*/




}
