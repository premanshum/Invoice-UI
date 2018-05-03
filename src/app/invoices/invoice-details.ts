import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IInvoice } from '../dataModal/IInvoice';
import { ILineItem } from '../dataModal/ILineItem';
import { IPayment } from '../dataModal/IPayment';
import { IProduct } from '../dataModal/IProduct';

@Component({
    /* No selector is needed as this page is going to be routed independently */
    templateUrl: './invoice-details.html'
})
  
export class InvoiceDetails  implements OnInit{
    m_invoiceDetail : IInvoice;
    m_currentComponentName : string;
    m_products : IProduct[];
    
    constructor(private route:ActivatedRoute) { }
    
    ngOnInit() {
        this.m_products = this.tempProducts;
        this.m_currentComponentName = 'LineItems';
        //this.project = this.projectService.getProject(this.route.snapshot.params['id']);        
        this.m_invoiceDetail = {
            id : '001',
            reviewed: '1',
            user: '1500',
            modifiedDate: new Date('9/8/2017'),
            description: 'This is invoice Description.',
            siteId: '001',
            parentSiteId: 'P001',
            invoiceNumber: this.route.snapshot.params['id'],
            mRev: false,
            isModified: false,
            isDeleted: true,
            invoiceTotal: '40',
            payments : this.tempPayments,
            lineItems : this.tempLineItems
        };
    }

    sideBarClickHandled(data){
        console.log('Received : ', data.aValue);
        this.m_currentComponentName = data.aValue;
    }

    OnProductChangedHandler(data){
        console.log('Received selectedProduct: ', <IProduct> data.selectedProduct);
        console.log('Received selectedLineItem: ', <ILineItem> data.selectedLineItem);
        
        this.m_invoiceDetail
            .lineItems
            .find(l=>l.id == data.selectedLineItem.id).product = data.selectedProduct;
        //alineItem.product = data.selectedProduct;
        console.log(this.m_invoiceDetail);
    }
    

// Dummy Data

    tempLineItems : ILineItem [] = [
        {
            id:"0011",
            ngCharge:"20",
            units:"12",
            price:"200",
            product:{
                id:"QCtrans",
                productCode:"QCtrans",
                productDescription:"Electronic Claims Filed",
                unitPrice:"1.95"
            }
        },
        {
            id:"0012",
            ngCharge:"30",
            units:"14",
            price:"230",
            product:{
                id:"BATCHLIG",
                productCode:"BATCHLIG",
                productDescription:"Integrated Eligibility 02/18",
                unitPrice:"1.25"
            }
        },
        {
            id:"0013",
            ngCharge:"40",
            units:"16",
            price:"240",
            product:{
                id:"CLAIMSTAT",
                productCode:"CLAIMSTAT",
                productDescription:"Claim Status Inquiry",
                unitPrice:"1.35"
            }
        },
        {
            id:"0014",
            ngCharge:"60",
            units:"18",
            price:"270",
            product:{
                id:"CSI",
                productCode:"CSI",
                productDescription:"Web Claim Status Inquiry",
                unitPrice:"1.45"
            }
        },
    ];

    tempPayments : IPayment[] = [
        {
            adjCode : '12',
            adjust : '100',
            checkNumber : '2',
            date : new Date('1/19/2017'),
            docDate : new Date('1/1/2017'),
            id : 'invNum01',
            invNum : 'invNum01',
            payment : '200',
        },
        {
            adjCode : '12',
            adjust : '100',
            checkNumber : '2',
            date : new Date('2/13/2017'),
            docDate : new Date('2/1/2017'),
            id : 'invNum01',
            invNum : 'invNum01',
            payment : '300',
        },
        {
            adjCode : '13',
            adjust : '130',
            checkNumber : '2',
            date : new Date('3/14/2017'),
            docDate : new Date('3/1/2017'),
            id : 'invNum01',
            invNum : 'invNum01',
            payment : '400',
        },
        {
            adjCode : '14',
            adjust : '140',
            checkNumber : '2',
            date : new Date('4/15/2017'),
            docDate : new Date('4/1/2017'),
            id : 'invNum01',
            invNum : 'invNum01',
            payment : '400',
        },
        {
            adjCode : '15',
            adjust : '150',
            checkNumber : '2',
            date : new Date('5/16/2017'),
            docDate : new Date('5/1/2017'),
            id : 'invNum01',
            invNum : 'invNum01',
            payment : '500',
        },
        {
            adjCode : '16',
            adjust : '160',
            checkNumber : '2',
            date : new Date('6/13/2017'),
            docDate : new Date('6/1/2017'),
            id : 'invNum01',
            invNum : 'invNum01',
            payment : '600',
        },
        {
            adjCode : '17',
            adjust : '170',
            checkNumber : '2',
            date : new Date('7/13/2017'),
            docDate : new Date('7/1/2017'),
            id : 'invNum01',
            invNum : 'invNum01',
            payment : '700',
        },
        {
            adjCode : '12',
            adjust : '180',
            checkNumber : '2',
            date : new Date('8/13/2017'),
            docDate : new Date('8/1/2017'),
            id : 'invNum01',
            invNum : 'invNum01',
            payment : '800',
        },
    ];

    tempProducts : IProduct[] = [
        {
            id : 'Id01',
            productCode : 'ProdCode01',
            productDescription : 'Product Description',
            unitPrice : '1.1'
        },
        {
            id : 'QCtrans',
            productCode : 'QCtrans',
            productDescription : 'Quality Checking Transaction',
            unitPrice : '1.9'
        },
        {
            id : 'BATCHLIG',
            productCode : 'BATCHLIG',
            productDescription : 'Integrated Eligibility 02/18',
            unitPrice : '1.2'
        },
        {
            id : 'CLAIMSTAT',
            productCode : 'CLAIMSTAT',
            productDescription : 'Claim Status Inquiry',
            unitPrice : '1.3'
        },
        {
            id : 'CSI',
            productCode : 'CSI',
            productDescription : 'Claim Status Inquiry (Web)',
            unitPrice : '1.4'
        },
        {
            id : 'COB',
            productCode : 'COB',
            productDescription : 'Cordination of Benefits',
            unitPrice : '1.5'
        },
        {
            id : 'SWIFTCOB',
            productCode : 'SWIFTCOB',
            productDescription : 'Swift Cordination of Benefits',
            unitPrice : '1.6'
        },
        {
            id : 'QCPAPER',
            productCode : 'QCPAPER',
            productDescription : 'Paperless transaction',
            unitPrice : '1.7'
        },
        {
            id : 'WXYZ',
            productCode : 'WXYZ',
            productDescription : 'Double U Axe Why Zee',
            unitPrice : '1.8'
        }
    ];

}