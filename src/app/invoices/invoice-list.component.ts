import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../Services/InvoiceService';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { IProduct } from '../dataModal/IProduct';
import { IServiceResponse } from '../dataModal/IServiceResponse';
import { IInvoice } from '../dataModal/IInvoice';
import { IConfiguration } from '../dataModal/IConfiguration';


@Component({
  selector: 'invoice-list',
  templateUrl: './invoice-list.component.html'
})
export class InvoiceListComponent implements OnInit {

  invoices:IInvoice[];
  apiResponse: IServiceResponse;
  products : IProduct[];
  appConfig: any[];
  timeStamp : any;
  //private invoiceService;
  constructor( private invoiceService: InvoiceService, private httpService: HttpClient) {
  }

  ngOnInit() {    
    
        console.log("Reading Configuration");
        this.httpService.get<IConfiguration>('assets/configuration.json')
        .subscribe(
            data => {
                console.log ("We got the configuration data. ", <IConfiguration> data);
                //this._configuration = data as IConfiguration;
                this.invoiceService.setConfiguration(data);
                this.invoiceService
                      .getInvoicesFromApi()
                      .subscribe(invdata => {
                        this.apiResponse = invdata;
                        this.apiResponse.TimeStamp = new Date();
                        console.log ("Inside Invoice-List ");
                        this.invoices = this.apiResponse.Result;
                        this.timeStamp = this.apiResponse.TimeStamp;
                        this.invoiceService.setInvoices(this.apiResponse);
                      },
                      (err: HttpErrorResponse) => {
                        console.log ("Something gone bad." + err.message);
                      });
            },
            (err) => {
            console.log ("Something gone bad." + err.message);
            }
        );

        //this.apiResponse = this.invoiceService.getInvoices();
        /*
        if(this.apiResponse == null)
        {
          this.invoiceService
                .getInvoicesFromApi()
                .subscribe(data => {
                  this.apiResponse = data;
                  this.apiResponse.TimeStamp = new Date();
                  console.log ("Inside Invoice-List ");
                  this.invoices = this.apiResponse.Result;
                  this.timeStamp = this.apiResponse.TimeStamp;
                  this.invoiceService.setInvoices(this.apiResponse);
                },
                (err: HttpErrorResponse) => {
                  console.log ("Something gone bad." + err.message);
                });
        }
        else
        {
          this.invoices = this.apiResponse.Result;
          this.timeStamp = this.apiResponse.TimeStamp;
        }
        */
      }

}