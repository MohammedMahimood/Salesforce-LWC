/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-13-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement,wire } from 'lwc';
import { refreshApex } from '@salesforce/apex';

import getAccountDetails from '@salesforce/apex/AccountControllerDemo.getAccountDetails';

export default class HandsonGetAccountsLTen extends LightningElement {


    accList = [];
    error;
    isLoading = true;
    showNoRecords = false;
    wiredAccountResult;

    @wire(getAccountDetails)
    getAccounts(result){
         this.wiredAccountResult=result;

    const { data, error }=result ;

        if (data) {
            this.accList = data;
           

            this.showNoRecords = this.accList.length === 0;
            this.isLoading = false;
        }

        if (error) {
            this.error = error;
            this.isLoading = false;
        }
    
}

    handlerRefresh(){
        this.isLoading=true;
        refreshApex(this.wiredAccountResult);
    }

    // handlerGetAccount() {
    //     getAccountDetails().then((result) => {
    //         this.accList = result;
    //     }).catch((error) => {
    //         this.error = error;
    //     });

    // }
}