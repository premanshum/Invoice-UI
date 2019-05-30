import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConfiguration } from '../dataModal/IConfiguration';
import { InvoiceService } from '../Services/InvoiceService';

@Component({
  selector: 'invoice-app',
  template: '<nav-bar></nav-bar><router-outlet></router-outlet>'
})
export class InvoiceApp {

    _configuration : IConfiguration;

    constructor(private httpService: HttpClient, private invoiceService: InvoiceService) {
    }

    ngOnInit() {
    }  
    
}