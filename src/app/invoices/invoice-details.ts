import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IInvoice } from '../dataModal/IInvoice';

@Component({
    /* No selector is needed as this page is going to be routed independently */
    templateUrl: './invoice-details.html'
})
  
export class InvoiceDetails  implements OnInit{
    m_invoiceDetail : IInvoice;
    m_currentComponentName : string;
    
    constructor(private route:ActivatedRoute) { }
    
    ngOnInit() {
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
            lineItems : [
                {
                    id:"0011",
                    ngCharge:"20",
                    units:"12",
                    price:"200",
                    product:{
                        id:"QCtrans",
                        productCode:"QCTrans",
                        productDescription:"Electronic Claims Filed",
                        unitPrice:"1.75"
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
                        unitPrice:"1.95"
                    }
                },
                {
                    id:"0013",
                    ngCharge:"40",
                    units:"16",
                    price:"240",
                    product:{
                        id:"ClaimStat",
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
                        unitPrice:"1.75"
                    }
                },
            ]
        };
    }

    sideBarClickHandled(data){
        console.log('Received : ', data.aValue);
        this.m_currentComponentName = data.aValue;
    }
    
}