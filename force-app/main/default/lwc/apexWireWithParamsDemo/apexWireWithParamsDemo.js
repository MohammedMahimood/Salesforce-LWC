/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-31-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement,wire } from 'lwc';
import filterAccountType from '@salesforce/apex/AccountControllerDemo.filterAccountType';
export default class ApexWireWithParamsDemo extends LightningElement {
    selectedType=''
    
    @wire(filterAccountType,{type:'$selectedType'})
    filteredAccounts
    // ({data,error}){

    // }
    get typeOptions(){
        return [
            {label:'Customer - Channel', value:'Customer - Channel'},
            {label:'Customer - Direct', value:'Customer - Direct'}
        ]
    }
    typeHandler(event){
        this.selectedType=event.target.value

    }
}