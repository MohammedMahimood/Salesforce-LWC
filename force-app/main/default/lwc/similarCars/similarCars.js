/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-04-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement ,wire,api} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c';

import { NavigationMixin } from 'lightning/navigation';
import getSimilarCars from '@salesforce/apex/CarController.getSimilarCars';
export default class SimilarCars extends NavigationMixin(LightningElement) {
    @api recordId;
    @api objectApiName;

    similarCars;


    @wire(getRecord,{recordId:'$recordId',fields:[MAKE_FIELD]})
    car;


    fetchSimilarCars(){
        getSimilarCars({
            carId:this.recordId,
            makeTypes:this.car.data.fields.Make__c.value
        }).then(result=>{
            this.similarCars=result;
            console.log(this.similarCars);
        }).catch(error=>{
            console.error(error);
        })
    }

    handleViewDetailsClick(event){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:event.target.dataset.id,
                objectApiName:this.objectApiName,
                actionName:'view'
            }
        })
    }
}