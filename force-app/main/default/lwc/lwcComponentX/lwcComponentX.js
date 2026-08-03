/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-23-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement,wire } from 'lwc';
import SampleMessageChannel from '@salesforce/messageChannel/SampleMessageChannel__c';
import { APPLICATION_SCOPE, MessageContext, subscribe,unsubscribe } from 'lightning/messageService';
export default class LwcComponentX extends LightningElement {
    receivedMessage
    subscription
    @wire(MessageContext)
    context

    connectedCallback(){
        this.subscribeMessage();
    }

    subscribeMessage(){
      this.subscription=  subscribe(this.context,SampleMessageChannel,(message)=>{this.handlerMessage(message)},{scope: APPLICATION_SCOPE})
    }
    handlerMessage(message){
        this.receivedMessage= message.lmsData.value ? message.lmsData.value :'No message to display or published';
    } 
    unsubscribeMessage(){

    unsubscribe(this.subscription);
     this.subscription = null;
    }
}