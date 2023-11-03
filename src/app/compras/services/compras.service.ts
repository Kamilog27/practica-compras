import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from '../interfaces/compras.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
 baseUrl:string='https://fakestoreapi.com/products';
  constructor(private http:HttpClient) { }
  
  getProducts():Observable<products[]>{
    return this.http.get<products[]>(`${this.baseUrl}`);
  }
  getProduct(id:number):Observable<products>{
    return this.http.get<products>(`${this.baseUrl}/${id}`);
  }
}
