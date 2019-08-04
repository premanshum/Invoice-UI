import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
//import { HttpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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

import { MsalModule, MsalGuard, MsalInterceptor, MsalService } from '@azure/msal-angular';
import { LogLevel } from 'msal';

// Logger callback for MSAL
export function loggerCallback(logLevel, message, piiEnabled) {
  console.log(message);
}

// Note - locally we're using http for Azure Functions.  
// This is needed for the interceptor to attach tokens when making calls to the Function API.
export const protectedResourceMap: [string, string[]][] = [["http://localhost:4200/invoices", 
                        ['api://d24d28b4-09c9-4230-a9a0-ef113169c7b2/access_as_user_all']]];


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
    FormsModule,
    HttpClientModule,
    MsalModule.forRoot({
      authority: "https://login.microsoftonline.com/common/",
      consentScopes: [ "access_as_user_all", "api://d24d28b4-09c9-4230-a9a0-ef113169c7b2/access_as_user_all"],
      clientID: "d24d28b4-09c9-4230-a9a0-ef113169c7b2",
      redirectUri: "http://localhost:4200/invoices",
      popUp: true,
      protectedResourceMap: protectedResourceMap,
      postLogoutRedirectUri: "http://localhost:4200/",
      logger: loggerCallback,
      level: LogLevel.Verbose
    }),
    RouterModule.forRoot([
      { path: 'invoices', 
        component: InvoiceListComponent, 
        canActivate: [MsalGuard] },
    ])
  ],
  providers: [
    InvoiceService,
    JQUERY_PROVIDER,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    }
  ],
  bootstrap: [InvoiceApp],
  
})
export class AppModule { }
