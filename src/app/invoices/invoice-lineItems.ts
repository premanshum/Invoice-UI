import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'invoice-lineItems',
    templateUrl: './invoice-lineItems.html'
})
  
export class InvoiceLineItems  implements OnInit{  

    @Input() m_invoiceDetail : any;

    ngOnInit() {
    }
    
}