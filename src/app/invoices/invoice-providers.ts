import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'invoice-providers',
  templateUrl: './invoice-providers.html'
})

export class InvoiceProviders implements OnInit {
  
    @Input() m_invoiceDetail : any;

    ngOnInit() {
    }
    
}