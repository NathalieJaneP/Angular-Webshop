import { ICategory } from "./ICategory";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  productCategory: ICategory[]
}

