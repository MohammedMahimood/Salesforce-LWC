/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-13-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

export default class HandsonParentToChild extends LightningElement {
    account = {
        name: 'Edge Communications',
        industry: 'Electronics',
        phone: '555-0100'
    };

    handlerChangeEmp() {
        this.account = {
            name: 'United Oil & Gas',
            industry: 'Energy',
            phone: '555-0200'
        }
    }

}