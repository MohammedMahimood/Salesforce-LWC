/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-01-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

export default class Modal extends LightningElement {
    closeModalHandler(){
        this.dispatchEvent(new CustomEvent('close'));
    }
     handleFooterSlotChange() {
        const slot = this.template.querySelector('.footerSlot');
        const footer = this.template.querySelector('.slds-modal__footer');

        const footerElements = slot.assignedElements();

        if (footerElements.length > 0) {
            footer.classList.remove('slds-hide');
        } else {
            footer.classList.add('slds-hide');
        }
    }
}