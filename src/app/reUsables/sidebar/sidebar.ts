import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'side-bar',
    templateUrl: './sidebar.html'
})
  
export class SideBar  implements OnInit{  

    @Input() m_invoiceNumber : string;
    @Output() sideBarClick = new EventEmitter();

    ngOnInit() {
    }

    clickHandler(aValue : string){
        
        console.log('Emitted : ', {aValue});
        this.sideBarClick.emit({aValue});
    }
    
}