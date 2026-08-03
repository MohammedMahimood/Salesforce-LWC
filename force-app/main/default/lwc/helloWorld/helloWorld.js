/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-18-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement,track} from 'lwc';

export default class HelloWorld extends LightningElement {
    name ='enter your name';
    greeting = 'Welcome to LWC World';

    handlerNameChange(event) {
        this.name = event.target.value;
    }

    @track address ={city:'Hyderabad',
    postalcode:'500018',country:'India'};

    handlerobjectChange(event){
        this.address.city = event.target.value;
    }

    userList = ['Mahimood','Mohammed','pasha','Bhai'];
    num1=10;
    num2=20;
     //userFirst=this.userList[0];
     get userFirst(){
        return this.userList[0];
     }
     get sum(){
        return this.num1*this.num2;     }
}