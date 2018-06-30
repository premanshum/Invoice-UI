import { InjectionToken } from '@angular/core';

export const JQ_TOKEN = new InjectionToken('jQuery');

export function jQueryFactory() {
    return window['jQuery'];
}

export const JQUERY_PROVIDER = [
    { provide: JQ_TOKEN, useFactory: jQueryFactory },
];

/*

    Step 1: get jquery in your project

    npm install jquery
    Step 2: add type for jquery

    npm install -D @types/jquery
    Step 3: Use it in your component!

    import * as $ from 'jquery';
    Ready to use $!

Ref# https://stackoverflow.com/questions/39511788/how-to-import-jquery-to-angular2-typescrypt-projects/43376844#43376844

*/