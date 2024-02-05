import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() product!: Product | null;
  @Output() closeDetails = new EventEmitter<void>();

  CloseDetails(): void {
    this.closeDetails.emit();
  }
}
