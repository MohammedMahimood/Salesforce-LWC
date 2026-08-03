/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-30-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class DeleteRecordDemo extends LightningElement {
recordId
    changeHandler(event){
this.recordId=event.target.value;
    }
    deleteHandler(){
        deleteRecord(this.recordId).then((result)=>{
            console.log(result);
            this.showToast('Success!!','Deleted Successfully','success');
        }).catch(error=>{
            console.error(error);
             this.showToast('Error!!','error occurred','error')
        })
    }
    showToast(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({
            title:title,
            messag:message,
            variant:variant || 'success'
        }))
    }
}