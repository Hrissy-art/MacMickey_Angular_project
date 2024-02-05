import { OrderDetail } from "./order-details";

export interface Order {
    orderID: number;
    orderDetails: OrderDetail[];
    orderState: string;
    creationDateTime: string;
    lastModifiedDateTime: string;
    clientID: string;
  }