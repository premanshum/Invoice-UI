import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { InvoiceService } from './Services/InvoiceService';
import { InvoiceListComponent } from './invoices/invoice-list.component';
import { InvoiceThumbnailComponent } from './invoices/invoice-thumbnail';
import { InvoiceDetails } from './invoices/invoice-details';
import { InvoiceApp } from './invoices/invoice-app';
import { InvoiceLineItems} from './invoices/invoice-lineItems'
import { InvoicePayments} from './invoices/invoice-payments'
import { NavBar } from './reUsables/nav/navbar';
import { SideBar } from './reUsables/sidebar/sidebar';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceThumbnailComponent,
    InvoiceDetails,
    InvoiceApp,
    InvoiceLineItems,
    InvoicePayments,
    NavBar,
    SideBar
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
  ],
  providers: [InvoiceService],
  bootstrap: [InvoiceApp]
})
export class AppModule { }
