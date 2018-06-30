import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ILineItem } from '../dataModal/ILineItem';
import { IProduct } from '../dataModal/IProduct';
import { IInvoice } from '../dataModal/IInvoice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'invoice-providers',
  templateUrl: './invoice-providers.html'
})

export class InvoiceProviders implements OnInit {
  
    @Input() m_invoiceDetail : IInvoice;

    ngOnInit() {
    }
    
}

// https://www.c-sharpcorner.com/article/how-to-work-with-dropdown-in/