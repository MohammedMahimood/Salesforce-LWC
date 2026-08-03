/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-19-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selectedAnswers = {};
    correctAnswers = 0;
    isSubmitted = false;
    get notAllSelected() {
        return !(Object.keys(this.selectedAnswers).length === this.quizQuestions.length);
    }
    get isScoredFull(){
        return `slds-text-heading_large ${this.quizQuestions.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`
    }
    quizQuestions = [{
        id: 1,
        question: 'What does LWC stand for?',
        answers: {
            a: 'Lightning Web Components',
            b: 'Lightning Web Code',
            c: 'Lightning Web Componentry',
            d: 'Lightning Web Compilation'
        },
        correctAnswer: 'a',
    },
    {
        id: 2,
        question: 'Which decorator is used to make a property public in LWC?',
        answers: {
            a: '@api',
            b: '@track',
            c: '@wire',
            d: '@public'
        },
        correctAnswer: 'a'
    },
    {
        id: 3,
        question: 'What is the file extension for a Lightning Web Component JavaScript file?',
        answers: {
            a: '.js',
            b: '.html',
            c: '.css',
            d: '.json'
        }
        , correctAnswer: 'a'
    }]
    handlerChange(event) {
        console.log('name', event.target.name);
        console.log('value', event.target.value);
        const { name, value } = event.target;
        this.selectedAnswers = { ...this.selectedAnswers, [name]: value };
    }

    submitAnswers(event) {
        event.preventDefault();

        let correct = this.quizQuestions.filter(
            item => this.selectedAnswers[item.id] === item.correctAnswer
        );
        this.isSubmitted = true;
        this.correctAnswers = correct.length;

        console.log(this.correctAnswers);
    }
    resetAnswers() {
        this.selectedAnswers = {};
        this.correctAnswers = 0;
        this.isSubmitted = false;
        this.template.querySelectorAll('input[type="radio"]').forEach(item => {
            item.checked = false;
        });
    }
}