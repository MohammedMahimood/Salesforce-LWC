/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-25-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class ToastNotification extends LightningElement {
    toastHandler(){
       this.showToast('Success','{0} your account is created {1}','success');
    }
    toastHandlerTwo(){
         this.showToast('Error','your account was not create','error');
    }
    toastHandlerThree(){
         this.showToast('Warinig','you are not suppose to do this','warning');
    }
    toastHandlerFour(){
         this.showToast('Info','you will get promoted if do this job','info');
    }
    showToast(title,message,variant){
        const event=new ShowToastEvent({
            title,
            message,
            variant,
            messageData:[
                'Salesforce',{
                    url:'https://www.google.com',
                    label:'Click here'
                }
            ]
        })
        this.dispatchEvent(event);
    }

}