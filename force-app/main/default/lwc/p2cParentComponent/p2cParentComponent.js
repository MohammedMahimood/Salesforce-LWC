/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-22-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    carousalData = [{
        src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
        header: "First Card",
        description: "First card description."

    }, {
        src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        header: "Second Card",
        description: "Second card description.",

    }, {
        src: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
        header: "Third Card",
        description: "Third card description."
    }
    ]
    percentage=5;
    handlerChange(event){
        this.percentage=event.target.value;
    }
}