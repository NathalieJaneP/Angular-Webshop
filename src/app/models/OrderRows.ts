export class OrderRows {
    id: number;
    productId: number;
    product: string;
    amount: number;
    orderId: number;

    constructor(productId: number, amount: number) {
        this.productId = productId;
        this.amount = amount;
    }
}