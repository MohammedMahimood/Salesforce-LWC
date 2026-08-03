/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-22-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import pubSub from 'c/pubSub';
export default class PubSubcomponentB extends LightningElement {
    message;
    connectedCallback(){
        this.callSubscriber();
    }
    callSubscriber() {
        pubSub.subscribe('componentA',(message)=>{
            this.message=message
        })
    }
}