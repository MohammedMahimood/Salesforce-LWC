/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-31-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';

const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default class BookApp extends LightningElement {
    query = 'man';
    books; // Remains undefined until the server fetch operation payload returns

    connectedCallback() {
        this.fetchBook();
    }

    fetchBook() {
        fetch(BOOK_URL + encodeURIComponent(this.query))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network call was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Google Books Data:', data);
                this.books = data;
            })
            .catch(error => {
                console.error('Fetch Error:', error);
            });
    }
}