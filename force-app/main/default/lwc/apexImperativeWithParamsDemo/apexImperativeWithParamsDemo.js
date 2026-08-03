/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-31-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/AccountControllerDemo.findAccounts';
export default class ApexImperativeWithParamsDemo extends LightningElement {
    searchKey=''
    accounts;
    timer;
    searchHandler(event){
        window.clearTimeout(this.timer)
        this.searchKey=event.target.value
        this.timer=setTimeout(()=>{
            this.callApex()
        },1000)
        
    }
    callApex(){
        
        findAccounts({searchKey:this.searchKey})
        .then(result=>{
            this.accounts=result
        }).catch(Error=>{
            console.error(error);
        });
    }
}