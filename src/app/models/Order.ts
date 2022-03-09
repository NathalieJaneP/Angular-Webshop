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

    // constructor(created: Date, createdBy: string, paymentMethod: string, orderRows: OrderRows[]) {
    //     this.created = created;
    //     this.createdBy = createdBy;
    //     this.paymentMethod = paymentMethod;
    //     this.orderRows = orderRows
    // }
}


