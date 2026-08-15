/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-12-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

export default class HandsonEmployeeParentLseven extends LightningElement {



    name = 'John';
    department = 'Sales';
    salary = 50000;
    salHistory=[];
    newValue

    handlerUpdate(event){
        this.salary=event.detail.updateSal;
       
        this.salHistory.push(this.salary)
       
    }
    handlerDecSal(event){
        this.salary=event.detail.decSal;
        this.salHistory.push(this.salary)

    }

    // get spreadopr(){
    //    let {name,department,salary}={...this.employeeList};
    //     return {name ,department,salary};
    // }
    // handlerSalary() {
    //     this.newSalary = Number(this.salary) + 10000;
    //     this.salary=this.newSalary;
    //     //this.salary.clear()

    // }
}