import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { IProduct } from '../dataModal/IProduct';
import { IServiceResponse } from '../dataModal/IServiceResponse';
import { catchError } from 'rxjs/operators';
import { IInvoice } from '../dataModal/IInvoice';


@Injectable()
export class InvoiceService{

    products : IProduct[];
    _invoiceResponse : IServiceResponse;

    constructor(private http:Http, private httpService: HttpClient){
        // Nothing interesting
    }

    public getInvoicesFromApi() : Observable<IServiceResponse>{
        return this.httpService.get<IServiceResponse>("https://premwebapp01-dev02.azurewebsites.net/invoice/MethodB")
        .pipe(catchError(this.handleError<IServiceResponse>('getInvoicesFromApi', null)));
    }

    public searchInvoices(searchTerm : string){
        console.log("Search Term : " + searchTerm);
        var term = searchTerm.toLocaleLowerCase();
        var results:IInvoice[] = [];

        if(this._invoiceResponse == null)
            return [];

            var temp = this._invoiceResponse.Result;
            //console.log("Api : " + JSON.stringify({temp}, null, 4));

        var invoices = temp.filter(invoice => 
            invoice.InvoiceNumber.toLocaleLowerCase().indexOf(term) > -1);
        return invoices;
    }

    
    public getProductsFromJson() : Observable<any>{
        var xxx = this.httpService.get('assets/productRepository.json');
        //.map((response: Response) => response.json());
        return xxx;
        // Inspired from: http://www.encodedna.com/angular/read-an-external-json-file-in-angular-4-and-convert-data-to-table.htm
    }

    public getInvoices(){
        return this._invoiceResponse;
    }

    public setInvoices(value : IServiceResponse){
        this._invoiceResponse = value;
    }

    private handleError<T>(opertaion = 'operation', result?: T){
        return (error : any) : Observable<T> => {
            console.error(error);
            return Observable.of(result as T);
        }
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