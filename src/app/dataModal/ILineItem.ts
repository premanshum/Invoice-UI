import { IProduct } from "./IProduct";

export interface ILineItem {
    id: string,
    product: IProduct,
    units: string,
    price: string,
    ngCharge: string
}