/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-30-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement, api, wire } from 'lwc';
// 1. Imported getFieldValue utility
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class GetRecordDemo extends LightningElement {
    name;
    owner;
    annualRevenue;

    @api recordId;

    @wire(getRecord, {
        recordId: '$recordId',
        fields: [NAME_FIELD, OWNER_NAME_FIELD, ANNUAL_REVENUE_FIELD]
    })
    //@wire(getRecord, {recordId: '$recordId',layoutTypes:['Full'], modes: ['View']})
    accountHandler({ data, error }) {
        if (data) {
            console.log('Record Data:', data);

            // 2. Used getFieldValue for clean parsing (automatically falls back to display values for fields like Currency)
            this.name = getFieldValue(data, NAME_FIELD);
            this.owner = getFieldValue(data, OWNER_NAME_FIELD);
            this.annualRevenue = getFieldDisplayValue(data, ANNUAL_REVENUE_FIELD);

            //For formatted currency, you can choose to look up the displayValue explicitly
            // this.annualRevenue = data.fields.AnnualRevenue.displayValue ? 
            //                      data.fields.AnnualRevenue.displayValue : 
            //                      data.fields.AnnualRevenue.value;

        } else if (error) {
            console.error('Error fetching record:', error);
        }
    }
}