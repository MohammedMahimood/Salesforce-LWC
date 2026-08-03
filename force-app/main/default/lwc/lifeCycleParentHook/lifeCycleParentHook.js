/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-21-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

export default class LifeCycleParentHook extends LightningElement {
    // isVisible=false;
    constructor(){
        super();
        console.log('This is Parent Constructor');
    }
    connectedCallback(){
        console.log('This is parent connectedCallback')
    }
    renderedCallback(){
        console.log('This is a parent renderedCallback');
    }
    // name;
    // handlerChange(event){
    //     this.name=event.target.value;
    // }
    handlerCheck(){
        this.isVisible=!this.isVisible;
    }
}