/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-22-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import pubSub from 'c/pubSub';
export default class PubSubComponentA extends LightningElement {
    message;
    inputHandler(event){
        this.message=event.target.value;
    }
    publishHandler(){
        pubSub.publish('componentA',this.message);
    }
}