/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-20-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames=['james','bond','harry','brook'];
    fetchDetailHandler(){
    const ele=this.template.querySelector('h1');
    ele.style.border='1px solid red';
    console.log(ele.innerText);

    const userElements=this.template.querySelectorAll('.name');
    Array.from(userElements).forEach(item=>{
        console.log(item.innerText);
        item.setAttribute("title",item.innerText);
    })

    const childElement=this.template.querySelector('.child');
    childElement.innerHTML='<p> hey I am a child element</p>';
    }
}