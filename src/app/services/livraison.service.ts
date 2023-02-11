import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  apiURL: string = 'http://localhost:8081/api/livraison';
  constructor() { }
}
