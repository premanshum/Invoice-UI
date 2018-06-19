
import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQ_TOKEN } from '../../services/jQuery-service';

@Directive({
    selector: '[modalBox-trigger]' // unlike normal selectors, square bracket denotes attribute, not an element
})

export class ModalTriggerDirective implements OnInit{

    private el : HTMLElement;

    constructor (elRef:ElementRef, @Inject(JQ_TOKEN) private  $: any){
        this.el = elRef.nativeElement;
    }

    ngOnInit(){
        this.el.addEventListener('click', e=> {
            this.$('#modalBox').modal({})
        })
    }
}

