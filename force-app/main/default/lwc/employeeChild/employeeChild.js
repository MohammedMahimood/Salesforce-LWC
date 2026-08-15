/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-12-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement, api } from 'lwc';


export default class EmployeeChild extends LightningElement {

    @api name;
    @api department;
    @api salary;
    // @api employeeList;

// newSalary=this.salary;

handlerIncSalary(){
   
  let upSal =Number(this.salary)+5000;
  const event=new CustomEvent('salaryupdated',{
    detail:{
        updateSal:upSal
    }
  });this.dispatchEvent(event);

}
handlerDecSalary(){
    let deSal=Number(this.salary)-3000;
    const decEvent=new CustomEvent('salarydecrease',{
        detail:{
            decSal:deSal
        }
    });
    this.dispatchEvent(decEvent);
}
}


    //   handleError() {
    //     throw new Error('Something went wrong in Child Component');
    // }
    // @api employeeName;

    // changeName() {
    //     this.dispatchEvent(
    //         new CustomEvent('namechange', {
    //             detail: 'David'
    //         })
    //     );
    // }


    // @api
    // showMessage() {
    //     console.log('Hello from Employee Child!');
    // }

    //      handleAccountSelect() {

    //     const event = new CustomEvent('accountselect', {
    //         detail: {
    //             accountId: '001gK00001DSFLtQAP'
    //         }
    //     });

    //     this.dispatchEvent(event);

    // }
