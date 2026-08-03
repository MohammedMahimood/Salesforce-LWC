/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-22-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement,api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    ds;
    @api 
    get user(){
        return this.ds;
    }
    set user(data){
      
         this.ds=data.map(item => {
         return {...item, age:item.age*2, 'location':'Hyderabad'}
        });
    }
}