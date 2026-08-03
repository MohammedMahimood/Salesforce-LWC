/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-29-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import TYPE_FIELD from '@salesforce/schema/Account.Type';

export default class GetPicklistValuesDemo extends LightningElement {
    selectedIndustry = '';
    selectedType=''
    industryOptions = []
    typeOptions=[]
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo
    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: INDUSTRY_FIELD })
    industryPicklist({ data, error }) {
        if (data) {
            console.log(data);
            this.industryOptions = [...this.generatedPicklist(data)];
        } if (error) {
            console.error(error)
        }
    }

    // get options() {
    //     return [
    //         { label: 'New', value: 'new' },
    //         { label: 'In Progress', value: 'inProgress' },
    //         { label: 'Finished', value: 'finished' },
    //     ];
    // }
    generatedPicklist(data) {
        return data.values.map(item => ({ label: item.label, value: item.value }))
    }

    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }

    // Second field Type
     @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: TYPE_FIELD })
    TypePicklist({ data, error }) {
        if (data) {
            console.log(data);
            this.industryOptions = [...this.generatedPicklist(data)];
        } if (error) {
            console.error(error)
        }
    }
     handleTypeChange(event) {
        this.selectedType = event.detail.value;
    }
}