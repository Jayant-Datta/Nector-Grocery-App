export enum OrderStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

export enum ProductCategory {
  BEVERAGES = 'BEVERAGES',
  FRESH_PRODUCE = 'FRESH_PRODUCE',
  SNACKS = 'SNACKS',
  MEAT = 'MEAT',
  DAIRY = 'DAIRY',
  BAKERY = 'BAKERY'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: ProductCategory;
  unit: string; // e.g., '1kg', '500ml'
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  location?: string;
}