import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../Services/InvoiceService'


@Component({
  selector: 'invoice-list',
  templateUrl: './invoice-list.component.html'
})
export class InvoiceListComponent implements OnInit {

  invoices:any[];
  apiResponse: any;
  //private invoiceService;
  constructor( private invoiceService: InvoiceService) { 
    
  }

  ngOnInit() {
    this.invoices = this.invoiceService.getInvoices();

    this.invoiceService
          .getInvoicesFromApi()
          .subscribe(data => this.apiResponse = data);;    

  }

}