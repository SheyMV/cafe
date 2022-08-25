import Product from "./product.model";

export default class order {
    orderNumber: number;
    orderDate: Date;
    totalPrice: number;
    desc:string;
    products: Product[];
}
