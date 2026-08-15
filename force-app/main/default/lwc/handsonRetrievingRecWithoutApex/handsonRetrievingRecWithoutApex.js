/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-14-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
// import { getRecord } from 'lightning/uiRecordApi';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
// import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class HandsonRetrievingRecWithoutApex extends LightningElement {

    //getFieldValue

    contactFName = '';
    contactLName = '';
    email = '';
    phone = '';



    handlerInput(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        if (fieldName === 'contactFName') {
            this.contactFName = fieldValue;
        } else if (fieldName === 'contactLName') {
            this.contactLName = fieldValue;
        } else if (fieldName === 'email') {
            this.email = fieldValue;
        } else if (fieldName === 'phone') {
            this.phone = fieldValue;
        }
    }
    handlerCreate() {
        if (!this.contactLName) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'Last Name is required to create a Contact.',
                    variant: 'error'
                })
            );
            return;
        }
        const fields = {};
        fields[FIRSTNAME_FIELD.fieldApiName] = this.contactFName;
        fields[LASTNAME_FIELD.fieldApiName] = this.contactLName;
        fields[EMAIL_FIELD.fieldApiName] = this.email;
        fields[PHONE_FIELD.fieldApiName] = this.phone;

        const recordInput = {
            apiName: CONTACT_OBJECT.objectApiName,
            fields: fields
        };
        createRecord(recordInput)

            .then(contactRecord => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success',
                    message: `Contact created successfully! ID: ${contactRecord.id}`,
                    variant: 'success'
                }))
                this.resetFields();
            })
            .catch(error => {
                console.error(JSON.stringify(error));
                console.error(JSON.stringify(error.detail));
            })
    }
    resetFields() {
        this.contactFName = '';
        this.contactLName = '';
        this.email = '';
        this.phone = '';
        const inputFields = this.template.querySelectorAll('lightning-input');
        if (inputFields) {
            inputFields.forEach(field => {
                field.value = '';
            });
        }
    }
}



// import { LightningElement, wire } from 'lwc';
// import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
// import { updateRecord } from 'lightning/uiRecordApi';
// import NAME_FIELD from '@salesforce/schema/Account.Name';
// import ID_FIELD from '@salesforce/schema/Account.Id';
// import { refreshApex } from '@salesforce/apex';
// // import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
// // import PHONE_FIELD from '@salesforce/schema/Account.Phone';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';
// export default class HandsonRetrievingRecWithoutApex extends LightningElement {


//     accName;
//     recordId = '001gK00000kHPvbQAG';

//     @wire(getRecord, {
//         recordId: '$recordId', fields: [
//             NAME_FIELD
//         ]
//     })

//     wiredAccount(result) {
//         this.account = result;
//     }

//     get name() {
//         return getFieldValue(this.account.data, NAME_FIELD)
//     }
//     handlerInput(event) {
//         this.accName = event.target.value;
//     }
//     handlerUpdate() {

//         const fields = {};
//         fields[ID_FIELD.fieldApiName] = this.recordId;
//         fields[NAME_FIELD.fieldApiName] = this.accName;

//         const recordInput = { fields };
//         updateRecord(recordInput)
//             .then(() => {
//                 return refreshApex(this.account);
//             })
//             .then(() => {
//                 this.dispatchEvent(new ShowToastEvent({
//                     title: 'Success',
//                     message: 'Account updated successfully!',
//                     variant: 'success'
//                 }))
//             })
//             .catch(error => {
//                 console.error(JSON.stringify(error));
//             })
//     }


// recordId = '001gK00000kHPvbQAG';

// @wire(getRecord, {
//     recordId: '$recordId', fields: [
//         NAME_FIELD,
//         INDUSTRY_FIELD,
//         PHONE_FIELD
//     ]
// })
// account;

// get name() {
//     return getFieldValue(this.account.data, NAME_FIELD)
// }
// get industry() {
//     return getFieldValue(this.account.data, INDUSTRY_FIELD)
// }
// get phone() {
//     return getFieldValue(this.account.data, PHONE_FIELD)
// }
//}