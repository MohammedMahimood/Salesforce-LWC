/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-30-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRecordDemo extends LightningElement {
    // FIXED: Initialised as an object to prevent undefined runtime errors
    formFields = {};

    changeHandler(event) {
        const { name, value } = event.target;
        this.formFields[name] = value;
    }

    createContact() {
        const recordInput = {
            apiName: CONTACT_OBJECT.objectApiName,
            fields: this.formFields
        };

        createRecord(recordInput)
            .then(result => {
                // FIXED: Typos cleaned up in text literal
                this.showToast('Success', `Contact created with ID: ${result.id}`, 'success');

                // FIXED: Correct class selector used with standard HTML form reset()
                this.template.querySelectorAll('lightning-input').forEach(element => {
                    element.value = null;
                });

                // Reset state object
                this.formFields = {};
            })
            .catch(error => {
                // Safely handles string or array errors returned from Salesforce server
                const errorMessage = error.body?.message || 'Unknown error occurred';
                this.showToast('Error creating record', errorMessage, 'error');
            });
    }

    showToast(title, message, variant) {
        // FIXED: Corrected parameter name typo from 'viriant' to 'variant'
        this.dispatchEvent(new ShowToastEvent({
            title: title,
            message: message,
            variant: variant || 'success'
        }));
    }
}