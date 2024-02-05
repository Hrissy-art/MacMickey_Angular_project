import { Component } from '@angular/core';
import { Adress } from '../Models/adresses';
import { AdresseService } from './adresse.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.css'
})
export class AddressesComponent {
  adresses!: Adress [];

  constructor(private adresseService: AdresseService) {}

  ngOnInit(): void {
    this.adresseService.getAdresses().subscribe((data) => {
      this.adresses = data;
    });
  }

}
