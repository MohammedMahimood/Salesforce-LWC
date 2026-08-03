/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-30-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement ,wire} from 'lwc';
import  {getNavItems} from 'lightning/uiAppsApi';
export default class GetNavItemsDemo extends LightningElement {

    @wire(getNavItems,{
        pageSize:30
    })
    navItemsHandler({data,error}){
        if(data){
            console.log(data)
        }
    }
}