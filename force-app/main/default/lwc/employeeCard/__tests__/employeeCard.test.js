import { createElement } from '@lwc/engine-dom';

import EmployeeCard from 'c/employeeCard';

describe('c-employee-card', () => {

    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays message when button is clicked', async () => {

        const element = createElement('c-employee-card', {
            is: EmployeeCard
        });

        document.body.appendChild(element);

        const button = element.shadowRoot.querySelector(
            'lightning-button'
        );

        button.click();

        // Wait for LWC to rerender
        await Promise.resolve();

        const paragraph = element.shadowRoot.querySelector('p');

        expect(paragraph.textContent).toBe('Hello Mahimood');
    });
});