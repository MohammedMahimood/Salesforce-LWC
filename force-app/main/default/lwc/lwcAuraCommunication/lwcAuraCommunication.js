/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-22-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api title;
    callAura() {
        const myEvent = new CustomEvent('sendMessage', {
            detail: {
                'msg': 'The message is from the lwc to aura with Custom Event'
            }
        })
        this.dispatchEvent(myEvent);
    }
}