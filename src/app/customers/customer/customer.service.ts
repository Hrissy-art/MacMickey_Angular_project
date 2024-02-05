import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../Models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://macmickey.azurewebsites.net/client/'; 

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
    
  }
}
