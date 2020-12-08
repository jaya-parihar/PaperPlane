import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable  } from 'rxjs';
import { Product } from '../../interface/product'

@Injectable({
  providedIn: 'root' 
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  
  callBack: Observable<Product> | undefined;
  addProduct(params:any): Observable<Product>
  {
    const serverUrl = "http://paperplane.store:3000/vendor/item";
    let httpHeaders = new HttpHeaders({
      'content-type': 'application/json'
    });
    let token:string | any;
    token = localStorage.getItem("token");
    httpHeaders = httpHeaders.set('token',token);
    return this.httpClient.post<Product>(serverUrl,params,{headers: httpHeaders});
  }
  getCategories(): Observable<Product>
  {
    const serverUrl = "http://paperplane.store:3000/vendor/getCategories";
    let httpHeaders = new HttpHeaders({
      'content-type': 'application/json'
    });
    let token:string | any;
    token = localStorage.getItem("token");
    httpHeaders = httpHeaders.set('token',token);
    return this.httpClient.get<Product>(serverUrl, {headers: httpHeaders});
  }
}
