/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-28-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationToVFPage extends NavigationMixin(LightningElement) {
    navigateToVFPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
               url:'/apex/navigationToVFPage'

            }
        }).then(generatedUrl=>{
            console.log(generatedUrl)
            window.open(generatedUrl,'_blank')
        })
    }
}