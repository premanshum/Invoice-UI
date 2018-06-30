import { Routes } from '@angular/router'
import { InvoiceListComponent } from './invoices/invoice-list.component';
import { InvoiceDetails } from './invoices/invoice-details';

export const appRoutes:Routes= [
    { 
        path: 'invoices',
        component:InvoiceListComponent
    },
    { 
        path: 'invoices/:id',
        component:InvoiceDetails
    },
    { 
        path: '',
        redirectTo: '/invoices',
        pathMatch:'full'
    },
    { 
        path: 'trial',
        component:InvoiceListComponent
    }

]