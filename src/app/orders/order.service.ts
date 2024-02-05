import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../Models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'https://macmickey.azurewebsites.net/Order'; 

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }
}




  