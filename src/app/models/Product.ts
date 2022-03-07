import { ICategory } from "./ICategory";

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    productCategory: ICategory[]

    constructor(Id: number, Name: string, Description: string, Price: number, ImageUrl: string, ProductCategory: ICategory[]) {
        this.id = Id;
        this.name = Name;
        this.description = Description;
        this.price = Price;
        this.imageUrl = ImageUrl;
        this.productCategory = ProductCategory;
    }
}