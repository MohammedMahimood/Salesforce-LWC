/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-01-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement,wire } from 'lwc';
import getAccountsCsv from '@salesforce/apex/CsvControllerDemo.getAccountsCsv';
import { exportCSVFile } from 'c/utilsCsv';
export default class CsvDemo extends LightningElement {
    accountData;
    accountHeaders = {Id:'Record Id', Name:'Name', Phone:'Phone', Industry:'Industry', AnnualRevenue:'Annual Revenue' };



    @wire(getAccountsCsv)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accountData = data;
            console.log(data);
        } else if (error) {
            console.error('Error fetching accounts:', error);
        }
    }
    csvGenerator() {
    exportCSVFile(this.accountHeaders, this.accountData, 'Account_records');
}
}