import { Category } from "./Category";

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    productCategory: Category[]
    quantity: number = 0;

    //TA BORT?
    // constructor(Id: number, Name: string, Description: string, Price: number, ImageUrl: string, ProductCategory: Category[], quantity: number) {
    //     this.id = Id;
    //     this.name = Name;
    //     this.description = Description;
    //     this.price = Price;
    //     this.imageUrl = ImageUrl;
    //     this.productCategory = ProductCategory;
    //     this.quantity = quantity;
    // }
}