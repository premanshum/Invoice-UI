import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../Services/InvoiceService';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { IProduct } from '../dataModal/IProduct';
import { IInvoiceResponse } from '../dataModal/IInvoiceResponse';
import { IInvoice } from '../dataModal/IInvoice';


@Component({
  selector: 'invoice-list',
  templateUrl: './invoice-list.component.html'
})
export class InvoiceListComponent implements OnInit {

  invoices:IInvoice[];
  apiResponse: IInvoiceResponse;
  products : IProduct[];
  appConfig: any[];
  //private invoiceService;
  constructor( private invoiceService: InvoiceService, private httpService: HttpClient) { 
    
  }

  ngOnInit() {
    //this.appConfig[0] = '@ConfigurationManager.AppSettings["userName"]';
    //console.log("AppConfig:" + this.appConfig[0]);

    this.invoices = this.invoiceService.getInvoices();

    this.invoiceService
          .getInvoicesFromApi()
          .subscribe(data => {
            this.apiResponse = data;
            console.log ("We got the Data. " + this.apiResponse.Result);
            this.invoices = this.apiResponse.Result;
          },
          (err: HttpErrorResponse) => {
            console.log ("Something gone bad." + err.message);
          });
            
/*
    this.invoiceService
          .getProductsFromJson()
          .subscribe(
            data => {
              this.products = data as IProduct[];
              //console.log ("We got the Data. " + this.products);
            },
            (err: HttpErrorResponse) => {
              console.log ("Something gone bad." + err.message);
            }
        );
        
/*
        this.httpService.get('assets/productRepository.json').subscribe(
          data => {
            this.products = data as IProduct[];	 // FILL THE ARRAY WITH DATA.
            console.log(this.products);
          },
          (err: HttpErrorResponse) => {
            console.log ("This is the error;"+err.message);
          }
        );
        */

  }

}