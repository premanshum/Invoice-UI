import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { InvoiceService } from './Services/InvoiceService';
import { InvoiceListComponent } from './invoices/invoice-list.component';
import { InvoiceThumbnailComponent } from './invoices/invoice-thumbnail';
import { InvoiceDetails } from './invoices/invoice-details';
import { InvoiceApp } from './invoices/invoice-app';
import { InvoiceLineItems } from './invoices/invoice-lineItems'
import { InvoicePayments } from './invoices/invoice-payments'
import { InvoiceProviders } from './invoices/invoice-providers'

import { NavBar } from './reUsables/nav/navbar';
import { SideBar } from './reUsables/sidebar/sidebar';
import { ModalBox} from './reUsables/modalBox/modalBox';
import { ModalTriggerDirective} from './reUsables/modalBox/modalBox-trigger-directive';
import { appRoutes } from './routes';
import { JQ_TOKEN, JQUERY_PROVIDER } from './services/jQuery-service';

@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceThumbnailComponent,
    InvoiceDetails,
    InvoiceApp,
    InvoiceLineItems,
    InvoicePayments,
    InvoiceProviders,
    NavBar,
    SideBar,
    ModalTriggerDirective,
    ModalBox
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    InvoiceService,
    JQUERY_PROVIDER
  ],
  bootstrap: [InvoiceApp],
  
})
export class AppModule { }
