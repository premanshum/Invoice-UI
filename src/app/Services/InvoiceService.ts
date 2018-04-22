import { Injectable} from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx'

@Injectable()
export class InvoiceService{

    constructor(private http:Http){

    }

    public getInvoicesFromApi() : Observable<any>{

        return this.http.get("http://localhost:8085/InvoiceWebApi/invoice")
        .map((response: Response) => response.json());
        
    }

    getInvoices(){
        return INVOICES;
    }

    handleError(error: Response){
        return Observable.throw(error.status);
    }
}


const INVOICES: any [] = [
    {
        Reviewed: 1,
        User: 1600,
        ModifiedDate: '9/8/2017',
        Description: 'This is invoice Description.',
        SiteId: '001',
        ParentSiteId: 'P001',
        InvoiceNumber: 'InvNum01',
        MRev: false,
        IsModified: false,
        IsDeleted: true,
        InvoiceTotal: 40

    },
    {
        Reviewed: 1,
        User: 1500,
        ModifiedDate: '9/8/2017',
        Description: 'This is invoice Description.',
        SiteId: '002',
        ParentSiteId: 'P002',
        InvoiceNumber: 'InvNum02',
        MRev: false,
        IsModified: true,
        IsDeleted: false,
        InvoiceTotal: 60

    },
    {
        Reviewed: 1,
        User: 1500,
        ModifiedDate: '9/8/2017',
        Description: 'Invoice#3',
        SiteId: '003',
        ParentSiteId: 'P003',
        InvoiceNumber: 'InvNum03',
        MRev: false,
        IsModified: false,
        IsDeleted: false,
        InvoiceTotal: 30

    },
    {
        Reviewed: 1,
        User: 1500,
        ModifiedDate: '9/8/2017',
        Description: 'Invoice#4',
        SiteId: '003',
        ParentSiteId: 'P003',
        InvoiceNumber: 'InvNum04',
        MRev: false,
        IsModified: false,
        IsDeleted: false,
        InvoiceTotal: 80

    },
    {
        Reviewed: 1,
        User: 1500,
        ModifiedDate: '9/8/2017',
        Description: 'Invoice#5',
        SiteId: '005',
        ParentSiteId: 'P005',
        InvoiceNumber: 'InvNum05',
        MRev: false,
        IsModified: true,
        IsDeleted: false,
        InvoiceTotal: 90

    },
    {
        Reviewed: 1,
        User: 1500,
        ModifiedDate: '9/8/2017',
        Description: 'Invoice#6',
        SiteId: '006',
        ParentSiteId: 'P006',
        InvoiceNumber: 'InvNum06',
        MRev: false,
        IsModified: false,
        IsDeleted: true,
        InvoiceTotal: 75

    }

];