/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-28-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class RecordEditCustom extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    inputValue = '';
    handlerChange(event) {
        this.inputValue = event.target.value;
    }
    handleSubmit(event) {
        event.preventDefault();
        const inputCmp = this.template.querySelector('lightning-input');
        const value = inputCmp.value;
        if (!value.includes('Australia')) {
            inputCmp.setCustomValidity("The account is must includes 'Australia'")
        } else {
            inputCmp.setCustomValidity("");
            const fields = event.detail.fields;
            fields.Name = value;

            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }
        inputCmp.reportValidity()
    }
    handlerSuccess(event) {
        const ele = new ShowToastEvent({
            title: 'Account Created',
            message: 'Record Id' + event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(ele)
    }
    handleError(event) {
        const elem = new ShowToastEvent({
            title: 'Error while creating Account ',
            message: event.detail.detail || event.detail.message,
            variant: 'error'
        })

        this.dispatchEvent(elem);
    }
}