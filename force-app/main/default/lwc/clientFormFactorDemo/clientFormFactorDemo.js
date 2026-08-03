/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-24-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import FORM_FACTOR from '@salesforce/client/formFactor';
export default class ClientFormFactorDemo extends LightningElement {
    formfactor=FORM_FACTOR;
}