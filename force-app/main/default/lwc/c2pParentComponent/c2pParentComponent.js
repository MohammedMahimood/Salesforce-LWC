/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-22-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    isShow = false;
    msg;
    handlerCheck() {
        this.isShow = true;
    }
    closeButton(event) {
        this.msg = event.detail;
        this.isShow = false;
    }
}