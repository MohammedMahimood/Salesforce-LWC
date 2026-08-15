/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-11-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

export default class HandsonEmployeeListLfive extends LightningElement {
   employeeList = [
    {
        id: 1,
        name: 'John',
        department: 'Sales',
        salary: 50000
    },
    {
        id: 2,
        name: 'David',
        department: 'Forces',
        salary: 80000
    },
    {
        id: 3,
        name: 'Cena',
        department: 'Wwe',
        salary: 200000
    },
    {
        id: 4,
        name: 'Mahimood',
        department: 'Developer',
        salary: 980000
    },
    {
        id: 5,
        name: 'Rahul',
        department: 'Cricket',
        salary: 500000
    }
]

showDetails = false;
searchKey = '';
filemp;

handlerChange(event) {

    this.searchKey = event.target.value.toLocaleLowerCase();

    // 🔴 CHANGED: Show the employee list when user searches
    this.showDetails = true;

}

get filteredAccounts(){

    if(!this.searchKey){
        return this.employeeList;
    }

    this.filemp=this.employeeList.filter(emp=>
        emp.name.toLocaleLowerCase().includes(this.searchKey)
    );

    return this.filemp;

}

// 🔴 CHANGED: Getter used because .length cannot be used directly in HTML
get noEmployee(){

    return this.searchKey && this.filemp && this.filemp.length === 0;

}



    //     handlerShowCount(){
    //         if(this.employeeList){
    //         this.employeeCount=this.employeeList.length;
    //         this.showDetails=true;
    //     }
    // }

}