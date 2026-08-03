/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-28-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToLwc extends NavigationMixin(LightningElement) {
      navigateToLwc() {
        var defination={
            componentDef: 'c:navigationLWCTarget',
            attributes:{
                recordId:'7366746378'

            }
        }
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url:'/one/one.app#'+btoa(JSON.stringify(defination))
               
            }
        })
    }
}