/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-13-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

export default class HandsonLifeCyclehooksLeighteen extends LightningElement {
    employee = {
        name: 'Mahimood',
        department: 'Sales',
        salary: 50000
    };
    showDetails = false;
    hasRendered = false;
    count = 0;

    handleClick() {
        this.showDetails = !this.showDetails;
    }
    get buttonLabel() {
    return this.showDetails ? 'Hide Employee' : 'Show Employee';
}
    constructor() {
        super();  // required
        console.log('Constructor called');
    }

    connectedCallback() {
        console.log('Im a connected call back')
    }



    renderedCallback() {
        if (this.hasRendered) {
            return;
        }

        this.hasRendered = true;

        this.count++;
        console.log('Rendered for the first time');
    }


}