import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { InvoiceService } from '../../Services/InvoiceService';
import { IInvoice } from '../../dataModal/IInvoice';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.html'
})
  
export class NavBar  implements OnInit{  
    
    _searchterm : string = "";
    _foundInvoices : IInvoice[];

    constructor( private invoiceService: InvoiceService) { 
    
    }

    ngOnInit() {
    }

    public searchInvoices (searchTerm: string){
        this._foundInvoices = this.invoiceService.searchInvoices(searchTerm);
        //console.log("Invoices : " + JSON.stringify({invoices}, null, 4));
    }
    
}