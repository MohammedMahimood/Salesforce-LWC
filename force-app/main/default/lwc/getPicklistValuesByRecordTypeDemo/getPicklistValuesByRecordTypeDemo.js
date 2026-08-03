/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-29-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetPicklistValuesByRecordTypeDemo extends LightningElement {
    ratingOption
    industryOption
    selectedRating
    selectedIndustry 

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo
    @wire(getPicklistValuesByRecordType, { objectApiName: ACCOUNT_OBJECT, recordTypeId: '$objectInfo.data.defaultRecordTypeId' })
    picklistHandler({ data, error }) {
        if (data) {
            console.log(data)
            this.ratingOption = this.picklistGenerator(data.picklistFieldValues.Rating)
            this.industryOption = this.picklistGenerator(data.picklistFieldValues.Industry)

        } if (error) {
            console.error(error)
        }
    }
    picklistGenerator(data) {
        return data.values.map(item => ({ 'label': item.label, 'value': item.value }))
    }
    handleChange(event){
        const {name,value}=event.target
        console.log(name +'==>' +value)
        if(event.target.name==='industry'){
            this.selectedIndustry= value
        }
        if(event.target.name==='rating'){
            this.selectedRating = value
        }
    }

}