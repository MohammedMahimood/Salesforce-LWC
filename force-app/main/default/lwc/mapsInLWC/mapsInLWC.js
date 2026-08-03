/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-31-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement,wire } from 'lwc';
import getAccount from '@salesforce/apex/MapControllerLwc.getAccount';
// import Description from '@salesforce/schema/Account.Description';
// import PostalCode from '@salesforce/schema/Asset.PostalCode';
// import Country from '@salesforce/schema/Asset.Country';
export default class MapsInLWC extends LightningElement {
    mapMarkers=[];
    markersTitle='Accounts Location';
   selectedMarker;
    @wire(getAccount)
    wireHandler({data,error}){
        if(data){
            console.log(data)
            this.formatResponse(data)
        }
        if(error){
            console.error(error)
        }
    }
    formatResponse(data){
        this.mapMarkers=data.map(item=>{
            return {
                location:{
                    Street:item.BillingStreet ||'',
                    City:item.BillingCity ||'',
                    PostalCode: item.BillingPostalCode ||'',
                    State: item.BillingState ||'',
                    Country: item.BillingCountry ||''
                },
                icon:'utility:salesforce1',
                title:item.Name,
                value:item.Name,
                description: item.Description || 'No description provided.' 
            }
        })
if (this.mapMarkers.length > 0) {
            this.selectedMarker = this.mapMarkers[0].value;
        }
    }
    callMarkerHandler(event){
        this.selectedMarker=event.detail.selectedMarkerValue
    }
}