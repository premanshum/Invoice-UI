import { ILineItem } from "./ILineItem";

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
    lineItems : ILineItem[]
}