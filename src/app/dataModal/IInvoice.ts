import { ILineItem } from "./ILineItem";
import { IPayment } from "./IPayment";

export interface IInvoice {
    id: string,
    reviewed: string,
    user: string,
    modifiedDate: Date,
    description: string,
    siteId: string,
    parentSiteId: string,
    invoiceNumber: string,
    mRev: boolean,
    isModified: boolean,
    isDeleted: boolean,
    invoiceTotal: string,
    lineItems : ILineItem[],
    payments : IPayment[]
}