/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-31-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement ,api} from 'lwc';

export default class LwcConfigurationDemo extends LightningElement {
    @api heading;
    @api recordId;
    @api age;
    @api levels;
}