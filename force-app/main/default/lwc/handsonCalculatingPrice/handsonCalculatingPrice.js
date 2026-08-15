/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-11-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

export default class HandsonCalculatingPrice extends LightningElement {
    productName = '';
    price = '';
    quantity = '';
    errorMessage = '';
    totalCost;
    showCost = false;
    errorMessageEmpty = '';

    handlerOnChange(event) {
        if (event.target.name === 'productName') {
            this.productName = event.target.value;
        }
        if (event.target.name === 'price') {
            this.price = event.target.value;
        }
        if (event.target.name === 'quantity') {
            this.quantity = event.target.value;
        }
    }


    handlerCalc() {
        if (!this.price || !this.quantity) {
            this.errorMessageEmpty = 'Please enter Price and Quantity.';
            this.showCost = false;
        }
        else if (this.quantity <= 0) {
            this.errorMessageEmpty = '';
            this.errorMessage = 'Quantity must be greater than 0.';
            this.showCost = false;
        } else {
            this.errorMessage = '';
            this.errorMessageEmpty = '';
            this.totalCost = this.price * this.quantity;
            this.showCost = true;
        }


    }

}