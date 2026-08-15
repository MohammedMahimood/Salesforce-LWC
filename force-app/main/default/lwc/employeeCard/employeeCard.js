/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-11-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement} from 'lwc';
// import { NavigationMixin } from 'lightning/navigation';

// export default class EmployeeCard extends NavigationMixin(LightningElement) {

export default class EmployeeCard extends LightningElement {

    studentName='';
    course='';
    college='';
    showStudent=false;
    errorMessage='';


    handlerInput(event){
        if(event.target.name === 'studentName'){
            this.studentName=event.target.value;
        }

         if(event.target.name === 'course'){
            this.course=event.target.value;
        }

         if(event.target.name === 'college'){
            this.college=event.target.value;
        }

    }

    handlerShow(){
        if(!this.studentName){
            this.errorMessage='Please Enter Name';
            this.showStudent=false;
        }
        else{
            this.errorMessage='';
            this.showStudent=true;
        }
        
    }

}
// employeeName='';
// employeeDepartment='';
// employeeExperience='';
// showDetails=false;
// errorMessage='';

// handlerInputChage(event){
// console.log(event.target.value);

// if(event.target.name === 'employeeName'){
// this.employeeName=event.target.value;
// }

// if(event.target.name === 'employeeDepartment'){
// this.employeeDepartment=event.target.value;
// }

// if(event.target.name === 'employeeExperience'){
// this.employeeExperience=event.target.value;
// }

// }

// handlerShowDetails(){

// if(!this.employeeName){
// this.errorMessage='Please enter your Name';
// this.showDetails=false;
// }
// else{
// this.errorMessage='';
// this.showDetails=true;
// }

// }


// }


    

    //    message = '';

    // handleClick() {
    //     this.message = 'Hello Mahimood';
    // }
    // isModalOpen = false;

    // openModal() {
    //     this.isModalOpen = true;
    // }

    // closeModal() {
    //     this.isModalOpen = false;
    // }

    // employee = {
    //     name: 'Mahimood',
    //     role: 'Salesforce Developer'
    // };

    // handleChange() {
    //      this.employee = {
    //          ...this.employee,
    //          name: 'John'
    //      };
    //     this.employee.name = 'John';
    // }

    // employeeName;

    // connectedCallback() {
    //     this.employeeName = 'Mahimood';
    //     console.log('EmployeeCard component loaded');
    // }


    //     renderedCallback() {
    //         this.employeeName='David';
    //     const message = this.template.querySelector('.message');

    //     message.style.fontSize = '30px';
    //     message.style.color='red';
    // }


    // handleNavigate() {

    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__objectPage',
    //         attributes: {
    //             objectApiName: 'Car__c',
    //             actionName: 'list'
    //         }
    //     });

    // }

    // @api recordId;

    // handleNewContact() {
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__objectPage',
    //         attributes: {
    //             objectApiName: 'Contact',
    //             actionName: 'new'
    //         },
    //         state: {
    //             defaultFieldValues: `AccountId=${this.recordId}`
    //         }
    //     });
    // }

//}
// import { LightningElement, wire, api } from 'lwc';

// import getAccountDetails from '@salesforce/apex/AccountControllerDemo.getAccountDetails';
// import { refreshApex } from '@salesforce/apex';
// import updateAccountName from '@salesforce/apex/AccountControllerDemo.updateAccountName';
// import { getRecord, getFieldValue, updateRecord } from 'lightning/uiRecordApi';

// import NAME_FIELD from '@salesforce/schema/Account.Name';

// export default class EmployeeCard extends LightningElement {

//     @api recordId;

//     newName;

//     @wire(getRecord, {
//         recordId: '$recordId',
//         fields: [NAME_FIELD]
//     })
//     account;

//     get accountName() {
//         return getFieldValue(this.account.data, NAME_FIELD);
//     }

//     handleNameChange(event) {
//         this.newName = event.target.value;
//     }

//     handleUpdate() {

//         const fields = {
//             Id: this.recordId,
//             Name: this.newName
//         };

//         updateRecord({ fields })
//             .then(() => {
//                 console.log('Account updated successfully');
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     }

// @api recordId;

// @wire(getRecord, {
//     recordId: '$recordId',
//     fields: [NAME_FIELD]
// })

// account;
// get accountName() {
//     return getFieldValue(this.account.data, NAME_FIELD);
// }
// accounts = [];
// wiredResult;

// @wire(getAccountDetails)
// handleAccounts(result) {

//     // Save the COMPLETE wire result
//     this.wiredResult = result;

//     if (result.data) {
//         this.accounts = result.data;
//     }

//     if (result.error) {
//         console.error(result.error);
//     }
// }

// handleUpdate(event) {

//     const accountId = event.target.dataset.id;

//     updateAccountName({
//         accountId: accountId
//     })
//         .then(() => {

//             // Refresh the existing wired data
//             return refreshApex(this.wiredResult);

//         })
//         .catch(error => {
//             console.error(error);
//         });
// }

//    accounts;

//     @wire(getAccountDetails)
//     handleAccounts({ data, error }) {

//         if (data) {
//             this.accounts = data.map(account => account.Name);
//         }

//         if (error) {
//             console.error(error);
//         }
//     }

// searchKey = 'Tata';

// @wire(getAccountDetails, {
//     searchKey: '$searchKey'
// })
// accounts;

// handleSearch(event) {
//     this.searchKey = event.target.value;
// }

// callChildMethod() {

//     const child = this.template.querySelector('c-employee-child');

//     child.showMessage();
// }



// employeeName = 'Mahimood';

// handleNameChange(event) {
//     this.employeeName = event.detail;
// }

// employees = [
//     {
//         id: 1,
//         name: 'John',
//         department: 'Salesforce'
//     },
//     {
//         id: 2,
//         name: 'David',
//         department: 'Java'
//     },
//     {
//         id: 3,
//         name: 'Mahimood',
//         department: 'LWC'
//     },
//     {
//         id: 4,
//         name: 'Ravi',
//         department: 'Apex'
//     }
// ];

// get employeeCount() {
//     return this.employees.length;
// }
// employee = {
//     name: 'John',
//     department: 'Salesforce'
// };

// changeName() {
//     this.employee = {
//         ...this.employee,
//         name: 'Mahimood'
//     };
// }


//    employeeName = 'John';

//     changeName() {
//         this.employeeName = 'David';
//     }

// employees = [
//     {
//         id: 1,
//         name: 'John',
//         department: 'Salesforce'
//     },
//     {
//         id: 2,
//         name: 'David',
//         department: 'Java'
//     },
//     {
//         id: 3,
//         name: 'Mahimood',
//         department: 'LWC'
//     }
// ];

//   employeeNames = this.employees.map(function(employee) {
//     return employee.name;
//  });
//     employeeNames = this.employees.filter(function(employee) {
//     return employee.department === 'Salesforce';
// });
//  employeeDepartments = employees.map(account => account.department)




//     account;


// handleAccountSelect(event) {


//     let accountId = event.detail.accountId;


//     getAccountDetails({ accountId: accountId })

//         .then(result => {

//             console.log(result);

//             this.account = result;

//         })

//         .catch(error => {

//             console.log(error);

//         });


// }

//     employeeName = 'Mohammed Mahimood';
//     department = 'Salesforce';
//     experience = 3;
//     location = 'Hyderabad';

//   handleEmployeeChange(event) {

//     console.log(JSON.stringify(event.detail));

//   }
// selectedDepartment;

// departmentOptions = [
//     { label: 'Salesforce', value: 'Salesforce' },
//     { label: 'Java', value: 'Java' },
//     { label: 'Python', value: 'Python' }
// ];

// handleChange(event) {

//     console.log(event);
//     console.log(event.target);
//     console.log(event.target.value);
//    console.log(JSON.stringify(event.detail));

// }

// handleButton(event) {

//     console.log('BUTTON');
//     console.log(event.target);
//     console.log(event.currentTarget);

// }

// handleParent(event) {

//     console.log('PARENT');
//     console.log(event.target);
//     console.log(event.currentTarget);

// }

// handleChange(event) {


//  console.log(event.target.value);

// }



//    employees = [
//     "John",
//     "David"
// ];
//    employees = [
//     {
//         name: "John",
//         role: "Developer"
//     },
//     {
//         name: "David",
//         role: "Admin"
//     }
// ];

// handlerCheck() {


// let newEmployees = [...this.employees];

// console.log(this.employees);
// console.log(newEmployees);




// let employee = "Mahimood";

// console.log(employee);

// employee = "Pasha";

// console.log(employee);
// console.log(this.employeeDetails.name);
// console.log(this.employeeDetails.department);

//    for(let i=0;i< this.employees.length;i++){
//     console.log(this.employees[i]);
//    }
// console.log(this.employees[0].name);
//     console.log(this.employees[1].role);


// }
//}