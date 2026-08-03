/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-01-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

export default class DateValidation extends LightningElement {
    startDate;
    endDate;
    error;
    handleDateChange(event) {
        const { name, value } = event.target;
        this[name] = value;

    }
    handleSubmit() {
       if( this.validateDate(this.startDate, this.endDate)){
        console.log('Valid Dates');
       }
       else{
        this.error = 'End Date should be greater than Start Date';
       }
}

    validateDate(startDate, endDate) {
       return new Date(startDate).getTime() <new Date(endDate).getTime();
    }
}