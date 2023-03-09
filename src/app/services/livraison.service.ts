import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livreur } from '../Model/Livreur.model';

const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  apiUrL: string = 'http://localhost:8081/api';

  constructor(private http:HttpClient) { }

  getLiv() : Observable<Livreur[]> {
    return this.http.get<Livreur[]>(this.apiUrL + "/livreur" , httpOptions)
  }

  getCommande() {
    return this.http.get<any>(this.apiUrL + "/commande/not-livred" , httpOptions)
  }

  addAffect(rq:any) : Observable<any[]> {
    return this.http.post<any[]>(this.apiUrL + "/affectation/add" ,rq, httpOptions)
  }





  

}
