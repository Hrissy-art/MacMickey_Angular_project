import { Component, OnInit } from '@angular/core';
import { Adress } from '../../Models/adresses';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {
  adresses!: Adress [];
customers: any;

  constructor(private customerService: CustomerService) {}
  ngOnInit(): void {
this.customerService.getCustomers().subscribe((data) =>{
  this.customers = data;
}) ; 
  }}
