import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  constructor(private _HttpClient:HttpClient) { }
  getAllProducts():Observable<Products[]>{
     return  this._HttpClient.get<Products[]>(`https://fakestoreapi.com/products`)
  
}
getProductsByID(id:number):Observable<Products>{
  return this._HttpClient.get<Products>(`https://fakestoreapi.com/products/${id}`)
}
 
}
