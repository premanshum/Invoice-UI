import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'side-bar',
    templateUrl: './sidebar.html',
    styles:[`
        .activeLink {background-color:  Green;}
    `]
})
  
export class SideBar  implements OnInit{  

    selectedItem:string;
    @Input() m_invoiceNumber : string;
    @Output() sideBarClick = new EventEmitter();

    ngOnInit() {
        this.selectedItem = "LineItems";
    }

    clickHandler(aValue : string){        
        //console.log('Emitted : ', {aValue});
        this.selectedItem = aValue;
        this.sideBarClick.emit({aValue});
    }
    
}