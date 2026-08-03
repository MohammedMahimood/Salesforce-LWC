/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-30-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement,wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import { updateRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
const COLS=[
    {label:'Id',fieldName:'Id'},
    {label:'Name',fieldName:'Name'},
    {label:'Title',fieldName:'Title'},
    {label:'Phone',fieldName:'Phone', editable:true},
    {label:'Email',fieldName:'Email' ,type:'email',editable:true},
]
export default class UpdateRecordDemo extends LightningElement {
    columns=COLS;
    contacts=[];
    draftValues=[];
    @wire(getListUi,{
        objectApiName:CONTACT_OBJECT,
        listViewApiName:'AllContacts'
    })listViewApiName({data,error}){
        if(data){
            console.log(data)
            this.contacts=data.records.records.map(item=>{
                return{
                    'Name':this.getValue(item,'Name'),
                    'Id':this.getValue(item,'Id'),
                    'Title':this.getValue(item,'Title'),
                    'Phone':this.getValue(item,'Phone'),
                    'Email':this.getValue(item,'Email'),

                }
            })
        }if(error){
            console.error(error)
        }
    }
    getValue(data,field){
        return data.fields[field].value
    }
    handleSave(event){
        console.log(JSON.stringify(event.detail.draftValues))
        const recordInput=event.detail.dreaftValues.map(item=>{
            const fields={...draft}
            return {fields:fields}
        })
        const promises=recordInput.map(recordInput=>updateRecord(recordInput))
        promise.all(promises).then(()=>{
            console.log('Contact updated Successfully')
            this.draftValues=[]
        }).catch(error=>{
            console.error('error updating the record',error)
        })
    }

}