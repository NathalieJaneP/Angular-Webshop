import { OrderRows } from "./OrderRows";

export class Order {
    id: number;
    companyId: number = 36;
    created: Date = new Date(Date.now());
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows: OrderRows[];
}