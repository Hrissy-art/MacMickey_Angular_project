// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../product.service';
// import { Product } from '../Models/product';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrl: './product-list.component.css'
// })
// export class ProductListComponent implements OnInit{
//   products: Product[] | undefined;

//   constructor(private productService: ProductService){}
//   ngOnInit(): void {
//     this.productService.getProducts()
//                        .subscribe((products: Product[])=> this.products = products);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products!: Product [];
  selectedProduct!: Product | null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onSelectProduct(product: Product): void {
    this.selectedProduct = product;
   
  }

  CloseDetails(): void {
    this.selectedProduct = null;
    console.log('Bouton cliqué');
  }
}
