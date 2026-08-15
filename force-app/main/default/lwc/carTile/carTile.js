/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-04-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement ,api} from 'lwc';

export default class CarTile extends LightningElement {
    @api car={};
    handleClick(){
        this.dispatchEvent(new CustomEvent('selected',{
            detail:this.car.Id
        }))
    }
}