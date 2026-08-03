/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-28-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';

export default class RecordEditFormDemo extends LightningElement {
    objectName = CONTACT_OBJECT
    //  fields=[NAME_FIELD,TITLE_FIELD,PHONE_FIELD,EMAIL_FIELD]
    fields = {
        accountField: ACCOUNT_FIELD,
        nameField: NAME_FIELD,
        titleField: TITLE_FIELD,
        phoneField: PHONE_FIELD,
        emailField: EMAIL_FIELD
    }
    handleReset() {
        const inputFields = this.template.querySelectorAll('lightning-input-field')
        if (inputFields) {
            Array.from(inputFields).forEach(field => {
                field.reset(); 
            })
        }
    }
}