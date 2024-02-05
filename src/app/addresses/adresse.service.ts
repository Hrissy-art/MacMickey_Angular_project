import { Injectable } from '@angular/core';
import { Adress } from '../Models/adresses';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  private apiUrl = 'https://macmickey.azurewebsites.net/address/'; 

  constructor(private http: HttpClient) {}

  getAdresses(): Observable<Adress[]> {
    return this.http.get<Adress[]>(this.apiUrl);
    
  }}