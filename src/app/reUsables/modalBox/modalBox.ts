import { Component, Input } from '@angular/core';

@Component({
selector: 'modalBox',
templateUrl: './modalBox.html'
})

export class ModalBox{
    @Input() title:string;

    constructor(){
        this.title = "Untitled"; // In case the title is not set in the HTML
    }
}