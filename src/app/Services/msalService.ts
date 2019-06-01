import { Injectable } from '@angular/core';  
import * as Msal from 'msal';
 
declare var bootbox: ""; 
@Injectable()

export class MsalService { 

    constructor(){
        // Nothing interesting
    }


    private msalConfig = {
        auth: {
            clientId: 'abcd-ef12-gh34-ikkl-ashdjhlhsdg',
            redirectUri: "https://myapp.com"
        },
        cache: {
            cacheLocation: 'localStorage' as 'localStorage',
            storeAuthStateInCookie: true
        }
    };

    private clientApplication = new Msal.UserAgentApplication(this.msalConfig);
    



    // this.clientApplication.handleRedirectCallback((error, response) => {
    //     // handle redirect response or error
    // });

} 