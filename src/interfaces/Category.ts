import { IProduct } from "./Product";

export interface ICategory {
  id: string;
  name: string;
  description: string;
  products?: IProduct[];
}
