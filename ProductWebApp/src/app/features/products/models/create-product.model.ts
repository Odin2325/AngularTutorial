export interface CreateProduct {
  name: string;
  description: string;
  brand: string;
  price: number;
  category: string;
  stockQuantity: number;
  isActive: boolean;
  supplier: string;
}