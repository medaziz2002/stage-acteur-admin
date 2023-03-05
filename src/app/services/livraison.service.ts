import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  apiURL: string = 'http://localhost:8081/api/livraison';

  constructor(private http:HttpClient) { }

ajoutCommande1(id1:number):Observable<any>
{
  return this.http.post<any>(this.apiURL,id1,httpOptions);
}

ajoutCommande2(id2:number):Observable<any>
{
  return this.http.post<any>(this.apiURL,id2,httpOptions);
}


}
