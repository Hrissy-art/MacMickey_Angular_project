import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { AddressesComponent } from './addresses/addresses.component';
import { FormComponent } from './customers/form/form.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: 'home' },
  { path: 'product-list', component: ProductListComponent },
  { path: 'orders', component: OrderDetailsComponent },
  { path: 'customers', component: CustomerComponent},
  { path: 'adresses', component: AddressesComponent},
  { path: 'add-adresse', component: FormComponent},

  
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
