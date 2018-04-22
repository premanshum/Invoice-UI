import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'invoice-thumbnail',
  templateUrl: './invoice-thumbnail.html'
})

export class InvoiceThumbnailComponent implements OnInit {

  @Input() m_invoice : any;

  constructor() { }

  ngOnInit() {
    // Prem
  }

}
