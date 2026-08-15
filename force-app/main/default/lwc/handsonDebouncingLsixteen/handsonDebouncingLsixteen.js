/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-13-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement, wire } from 'lwc';
import findAccounts from '@salesforce/apex/AccountControllerDemo.findAccounts';
import { refreshApex } from '@salesforce/apex'
export default class HandsonDebouncingLsixteen extends LightningElement {

    searchKey;
    accounts = [];
    error;
    isLoading = false;
    dontRunApex = false;
    timer;
    wiredAccountResult;
    war;
    empty;

    handlerChange(event) {
        const searchKey = event.target.value;
        clearTimeout(this.timer);
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.timer = window.setTimeout(() => {
            this.searchKey = searchKey;
            if (!this.searchKey) {
                this.empty = 'Please enter the account name';
                this.dontRunApex = true;
                this.isLoading = false;
                this.accounts = [];
            } else {
                this.empty = '';
                this.dontRunApex = false;
                this.isLoading = true;
            }
        }, 500)

    }

    @wire(findAccounts, { searchKey: '$searchKey' })
    findaccounts(result) {
        this.isLoading = true;

        this.wiredAccountResult = result;



        const { data, error } = result;
       

            if (data) {
                if (data.length === 0) {
                    this.war = 'No records found. Please provide valid Name';
                    this.accounts = [];
                    this.empty = '';
                } else {
                    this.accounts = data
                    this.dontRunApex = false;
                    this.empty = '';
                    this.war = '';

                }
                this.isLoading = false;
            }
        if (error) {
            this.error = error;
            this.dontRunApex = false;
            this.isLoading = false;
            this.war = '';
        }


    }
    handlerRefresh() {
        refreshApex(this.wiredAccountResult);
    }

}










// searchKey = '';
// accounts = [];
// error;
// isLoading = false;
// dontRunApex=false;
// timer;
// wiredAccountResult;
// war;
// empty;


// handlerChange(event) {
//     const searchKey = event.target.value;
//     clearTimeout(this.timer);
//     // eslint-disable-next-line @lwc/lwc/no-async-operation
//     this.timer = window.setTimeout(() => {
//         this.searchKey = searchKey;
//         if (!this.searchKey) {
//             this.empty = 'Please enter the account name';
//         this.dontRunApex = true;
//         this.isLoading = false;
//         return;
//         }
//         this.isLoading = true;
//         findAccounts({ searchKey: this.searchKey }).then((result) => {
//             if (result.length === 0) {
//                 this.war = 'No records found. Please provide valid Name';
//                 this.accounts = [];
//                 this.empty ='';

//             }else{
//             this.accounts = result;
//                 this.dontRunApex = false;
//                 this.empty ='';
//                 this.war='';
//             }
//         }).catch((error) => {
//             this.error = error;
//             this.dontRunApex = false;
//             this.war='';
//         }).finally(() => {
//                 this.isLoading = false;
//             })
//     }, 500);
// }
