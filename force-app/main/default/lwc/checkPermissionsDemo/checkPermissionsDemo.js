/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-24-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewSetup';
/* https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_get_permissions */
import CUSTOMpermission from '@salesforce/customPermission/Show_Details'
export default class CheckPermissionsDemo extends LightningElement {
    get hasViewAllDataAvailable(){
        return hasViewAllData;
    }
    get CustomPetmission(){
        return CUSTOMpermission
    }
}