/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-15-2026
 * @last modified by  : Mohammed Mahimood
**/


/**
 * @description       : LMS Publisher + Subscriber
 *                      Publishes selected Accounts
 *                      Receives clear-selection message from Subscriber
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

// Apex method to retrieve Accounts
import getAccountList
    from '@salesforce/apex/AccountControllerDemo.getAccountList';

export default class HandsonPublisher extends LightningElement {

    // Stores Account records received from Apex
    accounts = [];

    // Stores selected Account rows
    selectedRows = [];

    // Stores LMS subscription
    subscription;

    // Datatable columns
    columns = [
        {
            label: 'Account ID',
            fieldName: 'Id',
            type: 'text'
        },
        {
            label: 'Account Name',
            fieldName: 'Name',
            type: 'text'
        }
    ];

    // MessageContext is required for publish() and subscribe()
    @wire(MessageContext)
    messageContext;

    // Retrieve Accounts from Apex
    @wire(getAccountList)
    getAccounts({ data, error }) {

        if (data) {
            this.accounts = data;
        }

        if (error) {
            console.error(
                'Account Error:',
                JSON.stringify(error)
            );
        }
    }

    // Subscribe to LMS when component is inserted into DOM
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

    // Handle messages received from Subscriber
    handleMessage(payload) {

        // Check whether Subscriber requested clear selection
        if (payload.clearSelection) {

            // Clear our JavaScript selected rows
            this.selectedRows = [];

            console.log('Publisher: Selection cleared');
        }
    }

    // Runs whenever datatable row selection changes
    handlerRowSelection(event) {

        // Get all selected rows
        const selectedRows = event.detail.selectedRows;

        // Store selected Account IDs
        this.selectedRows = selectedRows.map(
            account => account.Id
        );

        // Create LMS payload
        const payload = {

            // Send selected Accounts to Subscriber
            accounts: selectedRows.map(account => {

                return {
                    recordId: account.Id,
                    recordName: account.Name
                };
            })
        };

        // Publish selected Accounts
        publish(
            this.messageContext,
            SAMPLE_MESSAGE_CHANNEL,
            payload
        );

        console.log(
            'Published Accounts:',
            JSON.stringify(payload.accounts)
        );
    }

    // Unsubscribe when component is removed from DOM
    disconnectedCallback() {

        unsubscribe(this.subscription);

        this.subscription = null;
    }
}
// import { LightningElement, wire } from 'lwc';

// import { publish, MessageContext } from 'lightning/messageService';
// import SAMPLE_MESSAGE_CHANNEL from '@salesforce/messageChannel/SampleMessageChannel__c';

// import getAccountList from '@salesforce/apex/AccountControllerDemo.getAccountList';

// export default class HandsonPublisher extends LightningElement {

//     accounts = [];

//     columns = [
//         { label: 'Account ID', fieldName: 'Id', type: 'text' },
//         { label: 'Account Name', fieldName: 'Name', type: 'text' }
//     ]

//     @wire(getAccountList)
//     getAccounts({ data, error }) {
//         if (data) {
//             this.accounts = data;
//         }
//         if (error) {
//             console.error(JSON.stringify(error));
//         }
//     }


//     @wire(MessageContext)
//     messageContext;


//     handlerRowSelection(event) {
//         const selectedRows = event.detail.selectedRows;

//         // if (selectedRows.length === 0) {
//         //     return;
//         // }

//         const payload = {
//             accounts: selectedRows.map(account => {
//                 return {
//                     recordId: account.Id,
//                     recordName: account.Name
//                 };
//             })
//         };

//         publish(this.messageContext, SAMPLE_MESSAGE_CHANNEL, payload)
//           console.log(
//         'Published Accounts:',
//         JSON.stringify(payload.accounts)
//     );
        
//     }


// }
//     message;
//     @wire(MessageContext)
//     messageContext;

//     handlerInput(event) {
//         this.message = event.target.value;
//     }
//     handlerSend() {

//         const payload = {
//             lmsData: this.message
//         }

//         publish(this.messageContext, SAMPLE_MESSAGE_CHANNEL, payload);
//         console.log('Message Published:', this.message);

//     }
// }