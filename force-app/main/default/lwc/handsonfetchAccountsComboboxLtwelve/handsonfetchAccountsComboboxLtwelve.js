/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-12-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
// import filterAccountType from '@salesforce/apex/AccountControllerDemo.filterAccountType';
import findAccounts from '@salesforce/apex/AccountControllerDemo.findAccounts';
export default class HandsonfetchAccountsComboboxLtwelve extends LightningElement {
    searchKey = '';
    accounts = [];
    error;
    isLoading = false;
    empty;
    dontRunApex = false;
    isEmpty = false;
    noRec;

    handlerChange(event) {
        this.searchKey = event.target.value;

    }

    handlerClick() {
        if (!this.searchKey) {

            this.empty = 'Please enter the account name';
            this.dontRunApex = true;
            this.isEmpty = true;
        }
        else {
            this.isLoading = true;
            findAccounts({ searchKey: this.searchKey }).then((result) => {
                if (result.length === 0) {
                    this.noRec = 'No Accounts Found.';
                    this.accounts='';
                } else {
                    this.accounts = result;

                    this.isEmpty = false;
                    this.dontRunApex = false;
                    this.noRec='';
                }
                }).catch((error) => {
                    this.error = error;
                    this.noRec='';
                    this.dontRunApex = false;
                    this.isEmpty = false;
                }).finally(() => {
                    this.isLoading = false;
                })

    }
}


}

//     get options(){
//     return [
//         { label: 'Prospect', value: 'Prospect' },
//         { label: 'Customer - Direct', value: 'Customer - Direct' },
//         { label: 'Customer - Channel', value: 'Customer - Channel' },
//         { label: 'Channel Partner / Reseller', value: 'Channel Partner / Reseller' },
//         { label: 'Installation Partner', value: 'Installation Partner' },
//         { label: 'Technology Partner', value: 'Technology Partner' },
//         { label: 'Other', value: 'Other' }
//     ];
// }
//     handlerChange(event) {
//         this.selectedType=event.target.value;
//     }
//     @wire(findAccounts, { searchKey: '$selectedType' })
//     getAccounts({ data, error }) {
//         if (data) {
//             this.accounts=data;
//         }
//         if (error) {
//             this.error=error;
//         }
//     }


// }