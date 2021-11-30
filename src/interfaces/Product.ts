import { ICategory } from "@/interfaces/Category";

export interface IColor {
  id: string;
  productId: string;
  label: string;
  code: string;
  qtyInStock: number;
}

export interface IComment {
  id: string;
  productId: string;
  author: string;
  comment: string;
  date: Date;
  note: number;
}

export interface IProduct {
  id: string;
  name: string;
  inSale: boolean;
  featured: boolean;
  price: number;
  imageUrl: string;
  details: string|null;
  categoryId: string;
  category?: ICategory;
  comments?: IComment[];
  colors?: IColor[];
}
