export interface Product {
  productID: number;
  name: string;
  productType: string;  
  unitPrice: number;
  description?: string | null; 
  stockpiled: number;
  }