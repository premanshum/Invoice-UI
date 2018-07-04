import { ILineItem } from "./ILineItem";
import { IPayment } from "./IPayment";
import { IProvider } from "./IProvider";

export interface IInvoice {
    Id: string,
    Reviewed: string,
    User: string,
    ModifiedDate: Date,
    Description: string,
    SiteId: string,
    ParentSiteId: string,
    InvoiceNumber: string,
    MRev: boolean,
    IsModified: boolean,
    IsDeleted: boolean,
    InvoiceTotal: string,
    LineItems : ILineItem[],
    Payments : IPayment[],
    Providers : IProvider[]
}