/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-14-2026
 * @last modified by  : Mohammed Mahimood
**/

import { LightningElement } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class HandsonLDScontactCreation extends LightningElement {
recordId='003gK00000xEMOTQA4';

  handlerSuccess(event) {

        //const contactId = event.detail.id;
        const eventF=event.detail;
        console.log('Event.Detail JSON',JSON.stringify(eventF))

        console.log('Created Contact Id:', this.recordId);

        this.dispatchEvent(new ShowToastEvent({
            title: "Success",
            message: "Contact Saved Successfully",
            variant: "success"

        }))
    }
    handlerError(event) {
        console.error(JSON.stringify(event.detail));
    }
    handlerSubmit(event) {
        event.preventDefault();
        // console.log('Form submission stopped');
        // console.log('Form Submitted', JSON.stringify(event.detail.fields))
        const fields=event.detail.fields;
        console.log('Before Update',JSON.stringify(fields));
        fields.LastName=fields.LastName.toUpperCase();
        console.log('After the Update',JSON.stringify(fields))
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }
}
    // handlerSuccess(event) {

    //     const contactId = event.detail.id;

    //     console.log('Created Contact Id:', contactId);

    //     this.dispatchEvent(new ShowToastEvent({
    //         title: "Success",
    //         message: "Contact Saved Successfully",
    //         variant: "success"

    //     }))
    // }
    // handlerError(event) {
    //     console.error(JSON.stringify(event.detail));
    // }
    // handlerSubmit(event) {
    //     event.preventDefault();
    //     // console.log('Form submission stopped');
    //     // console.log('Form Submitted', JSON.stringify(event.detail.fields))
    //     const fields=event.detail.fields;
    //     console.log('Before Update',JSON.stringify(fields));
    //     fields.LastName=fields.LastName.toUpperCase();
    //     console.log('After the Update',JSON.stringify(fields))
    //     this.template.querySelector('lightning-record-edit-form').submit(fields);
    // }
//}