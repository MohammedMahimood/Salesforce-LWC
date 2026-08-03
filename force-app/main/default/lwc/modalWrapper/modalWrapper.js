/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-01-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

export default class ModalWrapper extends LightningElement {

    isOpen=false;
    openModalHandler(){
        console.log('Clicked');
        this.isOpen=true;
    }
    closeModal(){
        this.isOpen=false;
    }
}