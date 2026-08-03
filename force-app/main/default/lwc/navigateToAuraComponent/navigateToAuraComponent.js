/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-28-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToAuraComponent extends NavigationMixin(LightningElement) {
navigateToAura(){
     this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
               componentName:'c__AuraNavigation'
               
            },
            state:{
                c__id:'8887397883'
            }
        })
    }
}