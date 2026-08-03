/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-30-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
export default class GetListUiDemo extends LightningElement {
    contacts=[];
    pageToken=null;
    nextPageToken=null;
    previousPageToken=null;
    @wire(getListUi,{objectApiName:CONTACT_OBJECT, listViewApiName:'AllContacts' ,pageSize:10,sortBy:TITLE_FIELD, pageToken:'$pageToken'})
    listViewHandler({data,error}){
        if(data){
            console.log(data);
            this.contacts=data.records.records;
            this.nextPageToken=data.records.nextPageToken;
            this.previousPageToken=data.records.previousPageToken;

        }
        if(error){
            console.error(error);
        }
    }
    handlePrevious(){
          if (this.previousPageToken) {
            this.pageToken = this.previousPageToken;
        }
    }
    handleNextPage(){
   if (this.nextPageToken) {
            this.pageToken = this.nextPageToken;
        }
    }

    // Getter properties to safely disable buttons in the HTML
    get isPreviousDisabled() {
        return !this.previousPageToken;
    }

    get isNextDisabled() {
        return !this.nextPageToken;
    }
}