/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-21-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import singinTemplate from './signinTemplate.html';
import signupTemplate from './signupTemplate.html';
import rendorTemplate from './rendorMethod.html';
export default class RendorMethod extends LightningElement {
    selectedbtn='';
    render() {
        return this.selectedbtn === 'Signup' ? signupTemplate :
            this.selectedbtn === 'Signin' ? singinTemplate : rendorTemplate;

    }
    handlerClick(event) {
        this.selectedbtn = event.target.value;
    }
    submitHandler(event){
        console.log(`${event.target.value} Sucessfully !!`);
    }
}