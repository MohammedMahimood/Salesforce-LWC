/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-21-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

export default class LifeCycleChildHook extends LightningElement {
     constructor(){
        super();
        console.log('This is child Constructor');
    }
    
    connectedCallback(){
        console.log('This is child connectedCallback')
    }
     renderedCallback(){
        console.log('This is a child renderedCallback');
    }
   
    disconnectedCallback(){
        alert('this alert is from Child');
    }
}