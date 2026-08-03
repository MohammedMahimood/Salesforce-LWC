/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-19-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

export default class HelloConditionalRenduring extends LightningElement {
    isVisible = false;
    toggleVisibility(){
        return this.isVisible =true;
    }
}