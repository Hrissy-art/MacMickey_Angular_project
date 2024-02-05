import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../../Models/order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit {

  orders!: Order[]; 
  // selectedOrder!: Order;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
      console.log(this.orders)
    });

    }
    
  }
  
  
  


  