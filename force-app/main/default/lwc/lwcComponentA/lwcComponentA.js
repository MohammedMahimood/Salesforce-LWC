/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-23-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement, wire } from 'lwc';
import SampleMessageChannel from '@salesforce/messageChannel/SampleMessageChannel__c';
import { MessageContext, publish } from 'lightning/messageService';
export default class LwcComponentA extends LightningElement {
    inputValue
    @wire(MessageContext)
    context;
    handlerInput(event) {
        this.inputValue = event.target.value;
    }
    sendMessageHandler() {
        const message = {
            lmsData: {
                value: this.inputValue
            }
        }
        publish(this.context, SampleMessageChannel, message)
    }
}