/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-21-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement, api } from 'lwc';

export default class P2cAlertComponent extends LightningElement {
    @api message ;
    @api cardHeading;
    @api number;
    @api isValid;
}