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
    @Input() m_products : IProduct[];
    @Output() onProductChanged = new EventEmitter();
    //selectedLineItem : any;

    ngOnInit() {
    }

    selectProductCode(ctrl : any, lineItem : ILineItem)
    {
      console.log(ctrl);
      console.log(ctrl.value);
      var selectedProduct = ctrl.value;
      var selectedLineItem = lineItem;
      
      console.log('Sending selectedProduct: ', <IProduct>selectedProduct);
      console.log('Sending selectedLineItem: ', <ILineItem> selectedLineItem);

      this.onProductChanged.emit({selectedProduct, selectedLineItem});
    } 

    compareFn(p1: IProduct, p2: IProduct): boolean {
      return p1 && p2 ? p1.productCode === p2.productCode : p1 === p2;
  }
    
}

// https://www.c-sharpcorner.com/article/how-to-work-with-dropdown-in/