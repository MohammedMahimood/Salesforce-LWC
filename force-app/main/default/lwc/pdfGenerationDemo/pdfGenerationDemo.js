/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-31-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement, api } from 'lwc';
import generatePDF from '@salesforce/apex/pdfController.generatePDF';

export default class PdfGenerationDemo extends LightningElement {
    @api recordId;
    imageUrl = 'https://www.citypng.com/public/uploads/preview/pdf-file-document-icon-png-7017516949639656mck9pqusp.png'
    invoiceData = {
        invoiceNo: '123',
        invoiceCreated: 'January 2,2026',
        invoiceDue: 'January 10,2027',
        companyName: 'Sparksuite, Inc.',
        address1: '1234 Sydney Road',
        address2: 'Sunnyville,CA 12345'
    }
    clientData = {
        client: 'Acme Corp',
        username: 'John Doe',
        email: 'john@gamil.com'
    }
    services = [
        { name: 'Consultant fee', amount: 1000.00 },
        { name: 'Website design', amount: 300.00 },
        { name: 'Hosting(3 months)', amount: 75.00 }
    ]
    get totalAmount() {
        return this.services.reduce((total, service) => {
            return total = total + service.amount
        }, 0)
    }
    pdfHandle() {
        let content = this.template.querySelector('.container');
        console.log(content.outerHTML)
        generatePDF({ recordId: this.recordId, htmlData: content.outerHTML }).then(result => {
            console.log('attachement id', result)
         const url = `${window.location.origin}/servlet/servlet.FileDownload?file=${result.Id}`;
window.open(url, '_blank');
        }).catch(error => {
            console.error(error)
        })


    }

}