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

//Dela upp i egen fil
export class OrderRows {
    id: number;
    productId: number;
    product: string;
    amount: number;
    orderId: number;

    constructor(id: number, productId: number, product: null, amount: number, orderId: number) {
        this.id = id;
        this.productId = productId;
        this.amount = amount;
        this.orderId = orderId;
    }
}