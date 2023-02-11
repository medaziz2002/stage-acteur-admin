import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../Model/Contact.model';

const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiURL: string ='http://localhost:8081/api/contact';
  constructor(private http:HttpClient) { }


listeContact():Observable<Contact[]>
{
  return this.http.get<Contact[]>(this.apiURL);
}

supprimerContact(id:number)
{
  const url=`${this.apiURL}/${id}`;
  return this.http.delete(url,httpOptions);
}
nombreContact()
{
  return this.http.get<any>(this.apiURL+"/all");
}

}
