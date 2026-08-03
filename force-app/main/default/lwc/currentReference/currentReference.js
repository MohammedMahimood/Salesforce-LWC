/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-28-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement ,wire} from 'lwc';
import { CurrentPageReference} from 'lightning/navigation';
export default class CurrentReference extends LightningElement {
    @wire(CurrentPageReference)
    pageRef

    get pageReference(){
        return this.pageRef ? JSON.stringify(this.pageRef,null,2):''
    }
}