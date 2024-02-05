import { Component } from '@angular/core';
import { Adress } from '../../Models/adresses';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  customers: any = {};

  customer: Adress = {
    addressID: 0,
    streetLine1: '',
    streetLine2: '',
    zipCode: '',
    city: '',
    phone: 0,
    countryID: 0,
    clientID: 0
  }; 
  
  onSubmit(): void {
    console.log( this.customers);
  
    // this.customers = {};

}

}
