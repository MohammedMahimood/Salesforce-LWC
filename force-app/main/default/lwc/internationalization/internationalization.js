/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-24-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale';
import CURRENCY from '@salesforce/i18n/currency';
import DIR from '@salesforce/i18n/dir';
export default class Internationalization extends LightningElement {
    dir='rtl';
    number = 6667787.34
    formatedCurrency=new Intl.NumberFormat('LOCALE',  {
        style:'currency',
        currency:CURRENCY,
        currencyDisplay:'symbol'
    }).format(this.number)

}