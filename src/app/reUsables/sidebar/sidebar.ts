import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'side-bar',
    templateUrl: './sidebar.html'
})
  
export class SideBar  implements OnInit{  

    @Input() m_invoiceNumber : string;

    ngOnInit() {
    }
    
}