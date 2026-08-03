/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-24-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import DESCRIPTION_ONE from '@salesforce/label/c.discriptionOne';
import DESCRIPTION_TWO from '@salesforce/label/c.discriptionTwo';
export default class CustomLabelDemo extends LightningElement {
    // descriptionOne=DESCRIPTION_ONE;
    LABELS={
        descriptionOne:DESCRIPTION_ONE,
        descriptionTwo:DESCRIPTION_TWO
    }
}