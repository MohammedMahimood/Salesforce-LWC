/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-23-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment';
import ANIMATE from '@salesforce/resourceUrl/animate';
// Example :- import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';'
import { loadScript ,loadStyle} from 'lightning/platformResourceLoader';
export default class ThirdPartyFiles extends LightningElement {
    cuttentDate
    isLoaded

    renderedCallback() {
        if (this.isLoaded) {
            return
        } else {
            Promise.all([
                loadStyle(this,ANIMATE+'/animate.min.css'),
                loadScript(this, MOMENT + '/moment.js')
            ]).then(() => {
                this.setDateOnScreen()
            }).catch(error => {
                console.error(error);
            })
            this.isLoaded = true
        }

    }
    setDateOnScreen() {
        this.cuttentDate = window.moment().format('LLLL')
    }
}