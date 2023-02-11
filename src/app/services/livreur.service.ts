
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Livreur } from '../Model/Livreur.model';

const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LivreurService {

  apiURL: string = 'http://localhost:8081/api/livreur';

  livreurs!:Livreur[];

  constructor(private http:HttpClient)
  { }

   listeLivreur():Observable<Livreur[]>
   {
    return this.http.get<Livreur[]>(this.apiURL);
   }

modifierLivreur(l:Livreur):Observable<Livreur>
{
  const url=`${this.apiURL}/${l.id}`;
return this.http.put<Livreur>(url, l,httpOptions);
}

consulterLivreur(id:number):Observable<Livreur>
{
  const url=`${this.apiURL}/${id}`;
  return this.http.get<Livreur>(url);
}


supprimerLivreur(id:number)
{
const url=`${this.apiURL}/${id}`;
return this.http.delete(url,httpOptions);
}

ajouterLivreur(l:Livreur):Observable<Livreur>
{
  return this.http.post<Livreur>(this.apiURL+"/registerLivreur", l,httpOptions);
}


}
