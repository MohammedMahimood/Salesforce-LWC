/**
 * @description       :
 * @author            : Mohammed Mahimood
 * @group             :
 * @last modified on  : 08-01-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactControllerFilterDemo.getContactList';

export default class FilteringAndSortingDemo extends LightningElement {
    headings = ['Id', 'Name', 'Title', 'Email'];

    fullTableData = [];
    filteredData = [];

    timer;
    filterBy = 'Name';

    sortedBy = '';
    sortDirection = 'asc';

    @wire(getContactList)
    contactHandler({ data, error }) {
        if (data) {
            this.fullTableData = data;
            this.filteredData = [...data];
        } else if (error) {
            console.error(error);
        }
    }

    get FilterByOptions() {
        return [
            { label: 'All', value: 'All' },
            { label: 'Id', value: 'Id' },
            { label: 'Name', value: 'Name' },
            { label: 'Title', value: 'Title' },
            { label: 'Email', value: 'Email' }
        ];
    }

     get SortedByOptions() {
        return [
            { label: 'Id', value: 'Id' },
            { label: 'Name', value: 'Name' },
            { label: 'Title', value: 'Title' },
            { label: 'Email', value: 'Email' }
        ];
    }

    filterByHandler(event) {
        this.filterBy = event.detail.value;
    }

    filterHandler(event) {
        const searchValue = event.target.value.trim().toLowerCase();

        window.clearTimeout(this.timer);

        this.timer = window.setTimeout(() => {

            if (!searchValue) {
                this.filteredData = [...this.fullTableData];
                return;
            }

            this.filteredData = this.fullTableData.filter(record => {

                if (this.filterBy === 'All') {
                    return Object.keys(record).some(key =>
                        String(record[key] || '')
                            .toLowerCase()
                            .includes(searchValue)
                    );
                }

                return String(record[this.filterBy] || '')
                    .toLowerCase()
                    .includes(searchValue);
            });

        }, 500);
    }


    //Sorting Logic
    sortedByHandler(event) {
        this.sortedBy = event.detail.value;
        this.filteredData =this.sortBy(this.filteredData)
    }
    sortBy(data) {
        const cloneData = [...data];
        cloneData.sort((a, b) => {
           if (a[this.sortedBy] === b[this.sortedBy]) {
            return 0;
           }
           return this.sortDirection === 'desc' ? (a[this.sortedBy] > b[this.sortedBy] ? -1 : 1) : (a[this.sortedBy] < b[this.sortedBy] ? -1 : 1);
        })
        return cloneData;
    }
}