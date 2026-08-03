/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-27-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    recViewMode() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '003Aq00001KLdAVIA1',
                objectApiName: 'Contact',
                actionName: 'view'
            }
        })
    }
    recEditMode() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '003Aq00001KLdAVIA1',
                objectApiName: 'Contact',
                actionName: 'edit'
            }
        })
    }
}