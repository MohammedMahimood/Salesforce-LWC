/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-13-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountControllerDemo.getAccountList';
import deleteAccount from '@salesforce/apex/AccountControllerDemo.deleteAccount';
import { NavigationMixin } from 'lightning/navigation';
import { refreshApex } from '@salesforce/apex';
export default class HandsonRealTimeLtwenty extends NavigationMixin(LightningElement) {

    columns = [
        { label: 'Account ID', fieldName: 'Id', type: 'text' },
        { label: 'Account Name', fieldName: 'Name', type: 'text' },
        { label: 'Type', fieldName: 'Type', type: 'text' },
        { label: 'Industry', fieldName: 'Industry', type: 'text' },
        {
            type: 'action',
            typeAttributes: {
                rowActions: [
                    { label: 'View', name: 'view' },
                    { label: 'Edit', name: 'edit' },
                    { label: 'Delete', name: 'delete' }
                ]
            }
        }
    ];
    accounts = [];
    error;
    wiredAccountResult;
    selectedRows = [];
    accountNames = [];
    selectedAccCount;



    @wire(getAccountList)
    getAccounts(result) {

        this.wiredAccountResult = result;

        const { data, error } = result;
        if (data) {
            this.accounts = data;
        }
        if (error) {
            this.error = error;
        }
    }

    handlerRowSelection(event) {
        this.selectedRows = event.detail.selectedRows;

        this.accountNames = this.selectedRows.map(acc => {
            return acc.Name;
        })
        this.selectedAccCount = this.selectedRows.length;
        console.log(JSON.stringify(this.accountNames));
        console.log(this.accountNames);

    }
    handleRowAction(event) {


        const actionName = event.detail.action.name;
        const rowRec = event.detail.row;
        if (actionName === 'delete') {
            // console.log('Delete clicked');
            // console.log(rowRec.Id);
            // console.log(rowRec.Name);
            deleteAccount({ accountId: rowRec.Id }).then(() => {
                console.log('Record deleted Successfully');
                refreshApex(this.wiredAccountResult);
            }).catch((error) => {
                this.error = error;

                console.error('Delete failed:', JSON.stringify(error));
                console.error('Page Errors:', JSON.stringify(error.body.pageErrors));
                console.error('Field Errors:', JSON.stringify(error.body.fieldErrors));
            })
        } else {
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: rowRec.Id,
                    objectApiName: 'Account',
                    actionName: actionName
                }
            });
        }

    }
    handlerRefresh() {
        refreshApex(this.wiredAccountResult);
    }

}