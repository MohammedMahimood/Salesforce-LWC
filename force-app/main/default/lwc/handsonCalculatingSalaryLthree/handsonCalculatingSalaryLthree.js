/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 08-11-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

export default class HandsonCalculatingSalaryLthree extends LightningElement {
    employeeName='';
    basicSalary='';
    selectedValue='';
    percentValue='';
    errorMessage='';
    errorMessageEmpty='';
    showDetails=false;
    calcValue='';
    totalAmount='';


    get options(){
                return [
                            { label: 'Excellent', value: 'excellent' },
                            { label: 'Good', value: 'good' },
                            { label: 'Average', value: 'average' }
                        ];
        }

        handlerOnChange(event){
            if(event.target.name==='employeeName'){
                this.employeeName=event.target.value;
            }
            if(event.target.name==='basicSalary'){
                this.basicSalary=event.target.value;
            }
        }
        handleComboboxChange(event){
            this.selectedValue=event.target.value;
            if(this.selectedValue==='excellent'){
                this.percentValue= 20;
            }
            if(this.selectedValue==='good'){
                this.percentValue= 10;
            }
            if(this.selectedValue==='average'){
                this.percentValue= 5;
            }
        }

        handlerCalc(){
            if(!this.basicSalary || !this.selectedValue){
                this.errorMessageEmpty='Please enter Basic Salary and Performance.'
                this.errorMessage='';
                this.showDetails=false;
            }
            else if(this.basicSalary < 0){
                this.errorMessage='Salary cannot be negative.';
                this.errorMessageEmpty='';
                this.showDetails=false;
            }
            else{
                 this.errorMessage='';
                this.errorMessageEmpty='';
                this.calcValue= Number(this.basicSalary)* (Number(this.percentValue)/100);
                this.totalAmount=Number(this.basicSalary)+ Number(this.calcValue);
                this.showDetails=true;
            }

        }

}


//     employeeName = '';
//     basicSalary;
//     bonus;
//     errorMessage = '';
//     totalCost;
//     showCost = false;
//     errorMessageEmpty = '';
//     employeeStandard='';

//     handlerOnChange(event) {
//         if (event.target.name === 'employeeName') {
//             this.employeeName = event.target.value;
//         }
//         if (event.target.name === 'basicSalary') {
//             this.basicSalary = event.target.value;
//         }
//         if (event.target.name === 'bonus') {
//             this.bonus = event.target.value;
//         }
//     }


//     handlerCalc() {
//         if (!this.basicSalary || !this.bonus) {
//             this.errorMessageEmpty = 'Please enter Basic Salary and Bonus.';
//             this.showCost = false;
//         }
//         else if (this.basicSalary < 0 || this.bonus < 0) {
//             this.errorMessageEmpty = '';
//             this.errorMessage = 'Salary values cannot be negative.';
//             this.showCost = false;
//         } else {
//             this.errorMessage = '';
//             this.errorMessageEmpty = '';
//             this.totalCost = Number(this.basicSalary) + Number(this.bonus);
            
//             if(this.totalCost>=100000){
//                 this.employeeStandard='High Salary Employee';
//             } else{
//                 this.employeeStandard='Standard Salary Employee'
//             }
//             this.showCost = true;
//         }



//     }

// }
