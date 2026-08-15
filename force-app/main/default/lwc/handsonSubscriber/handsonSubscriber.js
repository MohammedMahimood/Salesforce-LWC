/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-15-2026
 * @last modified by  : Mohammed Mahimood
**/

/**
 * @description       : LMS Subscriber + Publisher
 *                      Receives selected Accounts
 *                      Sends clear-selection message
 * @author            : Mohammed Mahimood
 * @group             :
 * @last modified on  : 08-15-2026
 * @last modified by  : Mohammed Mahimood
**/

import { LightningElement, wire } from 'lwc';

// LMS methods
import {
    publish,
    subscribe,
    unsubscribe,
    MessageContext
} from 'lightning/messageService';

// Lightning Message Channel
import SAMPLE_MESSAGE_CHANNEL
    from '@salesforce/messageChannel/SampleMessageChannel__c';

export default class HandsonSubscriber extends LightningElement {

    // Stores Accounts received from Publisher
    receivedMessage = [];

    // Stores LMS subscription
    subscription;

    // MessageContext is required for LMS
    @wire(MessageContext)
    messageContext;

    // Subscribe when component is inserted into DOM
    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    // Subscribe to SampleMessageChannel
    subscribeToMessageChannel() {

        this.subscription = subscribe(
            this.messageContext,
            SAMPLE_MESSAGE_CHANNEL,
            (payload) => this.handleMessage(payload)
        );
    }

    // Handle messages received from Publisher
    handleMessage(payload) {

        // If Publisher sends Accounts,
        // display those Accounts
        if (payload.accounts) {

            this.receivedMessage = payload.accounts;

            console.log(
                'Received Accounts:',
                JSON.stringify(this.receivedMessage)
            );
        }
    }

    // Clear Accounts from Subscriber
    // and tell Publisher to clear its selection
    handlerClearSelection() {

        // Clear Accounts displayed in Subscriber
        this.receivedMessage = [];

        // Create clear-selection payload
        const payload = {
            clearSelection: true
        };

        // Publish clear-selection message
        publish(
            this.messageContext,
            SAMPLE_MESSAGE_CHANNEL,
            payload
        );

        console.log('Clear Selection message published');
    }

    // Unsubscribe when component is removed
    disconnectedCallback() {

        unsubscribe(this.subscription);

        this.subscription = null;
    }
}

// import { LightningElement, wire } from 'lwc';
// import SAMPLE_MESSAGE_CHANNEL from '@salesforce/messageChannel/SampleMessageChannel__c';
// import { subscribe, MessageContext, unsubscribe } from 'lightning/messageService';
// import { NavigationMixin } from 'lightning/navigation';

// export default class HandsonSubscriber extends NavigationMixin(LightningElement) {
//     receivedMessage = [];
//     subscription;

//     @wire(MessageContext)
//     messageContext;

//     connectedCallback() {
//         this.subscribeToMessageChannel();
//     }
//     subscribeToMessageChannel() {
//         this.subscription = subscribe(this.messageContext, SAMPLE_MESSAGE_CHANNEL, (payload) => this.handleMessage(payload));
//     }
//     handleMessage(payload) {
//         this.receivedMessage = payload.accounts;

//     }

//     handlerNavi(event) {
//         const recordId = event.currentTarget.dataset.recordId;
//         console.log("messge Id printin", recordId)
//         this[NavigationMixin.Navigate]({
//             type: 'standard__recordPage',
//             attributes: {
//                 recordId: recordId,
//                 objectApiName: 'Account',
//                 actionName: 'view'
//             }
//         })
//     }
//     disconnectedCallback() {
//         unsubscribe(this.subscription);
//         this.subscription = null;
//     }
// }
//     receivedMessage = '';
//     subscription;
//     @wire(MessageContext)
//     messageContext;

//     connectedCallback(){
//         this.subscribeToMessageChannel();
//     }
//     subscribeToMessageChannel(){
//         this.subscription= subscribe(this.messageContext,SAMPLE_MESSAGE_CHANNEL,(payload) => this.handleMessage(payload));
//     }
//     handleMessage(payload){
//         this.receivedMessage=payload.lmsData;
//     }
//     disconnectedCallback(){
// unsubscribe(this.subscription);
// this.subscription=null;
//     }
// }