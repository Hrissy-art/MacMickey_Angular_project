import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { ProductComponent } from './Products/product/product.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideRouter, ROUTES } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { AddressesComponent } from './addresses/addresses.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { FormComponent } from './customers/form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent,
    AddressesComponent,
    OrderDetailsComponent,
    FormComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
