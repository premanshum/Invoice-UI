import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'invoice-payments',
  templateUrl: './invoice-payments.html'
})

export class InvoicePayments implements OnInit {

  @Input() m_invoiceDetail : any;

  constructor() { }

  ngOnInit() {
    
  }
}
