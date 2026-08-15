/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-15-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement, wire } from 'lwc';
import SAMPLE_MESSAGE_CHANNEL from '@salesforce/messageChannel/SampleMessageChannel__c';
import { subscribe, MessageContext, unsubscribe } from 'lightning/messageService';
export default class HandsonSubscriberTwo extends LightningElement {
    receivedMessage = '';
    subscription;
    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }
    subscribeToMessageChannel() {
        this.subscription = subscribe(this.messageContext, SAMPLE_MESSAGE_CHANNEL, (payload) => this.handleMessage(payload));
    }
    handleMessage(payload) {
        this.receivedMessage = payload.lmsData;
    }
    disconnectedCallback() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}
