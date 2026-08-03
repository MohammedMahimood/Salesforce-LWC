/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-28-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement,wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
const fields=[NAME_FIELD,EMAIL_FIELD]
export default class WireDemoUserDetail extends LightningElement {
    userId=Id;
    userDetail; 
    //@wire(adapter,{adapterConfig})
    //propertyorfunction
    @wire(getRecord,{recordId:'$userId',fields})
    // userDetailHandler(response){
    //     console.log(response);
    //     let data=response.data;
    //     let error=response.error;
    // }
    userDetailHandler({data,error}){
        if(data){
            this.userDetail=data.fields;
        }if(error){
            console.error(error);
        }
    }
    @wire(getRecord,{recordId:'$userId',fields})
    userDetailProperty;
}