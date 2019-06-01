import { Injectable} from '@angular/core';
//import { Http } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { IProduct } from '../dataModal/IProduct';
import { IServiceResponse } from '../dataModal/IServiceResponse';
import { catchError } from 'rxjs/operators';
import { IInvoice } from '../dataModal/IInvoice';
import { IConfiguration } from '../dataModal/IConfiguration';


@Injectable()
export class InvoiceService{

    private _products : IProduct[];
    private _invoiceResponse : IServiceResponse;
    private _configuration : IConfiguration;


    constructor(private httpService: HttpClient){
        // Nothing interesting
    }

    public getInvoicesFromApi() : Observable<IServiceResponse>{         
       return this.httpService.get<IServiceResponse>(this._configuration.invoiceApiUrl)
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


    private handleError<T>(opertaion = 'operation', result?: T){
        return (error : any) : Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }

    public FillInvoicesFromApi(){
        if(this._invoiceResponse != null){
            console.log("Serving Invoices from cache");
            return;
        }
        else
        {
            if(this._configuration != null){
                this.getInvoicesFromApi()
                    .subscribe(data => {
                      this._invoiceResponse = data;
                      this._invoiceResponse.TimeStamp = new Date();
                      console.log ("We got the Invoice Data. ");
                      //console.log ("We got the Invoice Data. " + JSON.stringify({data}, null, 4));
                      this.setInvoices(this._invoiceResponse);
                    },
                    (err: HttpErrorResponse) => {
                      console.log ("Something gone bad." + err.message);
                    });
            }
        }

    }


    // Read the config file and fill the config variable
    /*
    private FillConfiguration()    {
        if(this._configuration != null) {
            return;
        }

        this.httpService.get<IConfiguration>('assets/configuration.json')
            .subscribe(
                data => {
                this._configuration = data as IConfiguration;
                this.setConfiguration(this._configuration);
                this.FillInvoicesFromApi();
                console.log ("We got the configuration data. ", <IConfiguration> this._configuration);
                },
                (err: HttpErrorResponse) => {
                console.log ("Something gone bad." + err.message);
                }
            );
            // Inspired from: http://www.encodedna.com/angular/read-an-external-json-file-in-angular-4-and-convert-data-to-table.htm
    }
    */

    
    // Properties
    public getInvoices(){
        console.log ("trying to retreive invoice Data. ");
        return this._invoiceResponse;
    }

    public setInvoices(value : IServiceResponse){
        this._invoiceResponse = value;
    }

    public getConfiguration(){
        //this.FillConfiguration();
        return this._configuration;
    }


    public setConfiguration(value : IConfiguration){
        this._configuration = value;
    }
}

const CONFIG : IConfiguration = {
    "version":"1.1",
    "invoiceApiUrl":"https://prem-webapp-via-cli.azurewebsites.net/invoice",
    "productApiUrl":"https://prem-webapp-via-cli.azurewebsites.net/product",
    "paymentApiUrl":"https://prem-webapp-via-cli.azurewebsites.net/payment"
};

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