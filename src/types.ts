export type Category =
  | "Women"
  | "Men"
  | "Jewelry"
  | "Accessories"
  | "Beauty";

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  sizes?: string[];
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}
