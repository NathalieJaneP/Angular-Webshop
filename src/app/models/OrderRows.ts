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
    // constructor(id: number, productId: number, product: string,
    //     amount: number, orderId: number) {
    //     this.id = id;
    //     this.productId = productId;
    //     this.product = product;
    //     this.amount = amount;
    //     this.orderId = orderId;
    // }
}