/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-22-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    closeHandler(){
        const myEvent=new CustomEvent('close',{
            detail: 'Hello I am the child Event Object'
        });
        this.dispatchEvent(myEvent);
    }
}