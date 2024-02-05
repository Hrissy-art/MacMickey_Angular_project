
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://macmickey.azurewebsites.net/product/'; 

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
    
  }

  // getProductDetails(productId: number): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${this.apiUrl}/${productId}`);
  // }
}

