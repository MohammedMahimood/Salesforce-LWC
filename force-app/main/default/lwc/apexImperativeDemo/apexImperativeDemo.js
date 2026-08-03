/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-31-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountControllerDemo.getAccountList';
export default class ApexImperativeDemo extends LightningElement {
    accounts
    accountHandler(){
        getAccountList().then(result=>{
            console.log(result);
            this.accounts=result
        }).catch(error=>{
            console.error(error);
        })
    }
}