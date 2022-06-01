import { LightningElement,wire } from 'lwc';
import { getSObjectValue } from '@salesforce/apex';
import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';

import Age__c_FIELD from '@salesforce/schema/customerinfo__c.Age__c';



export default class Importobject extends LightningElement {

    @wire(getSingleContact) contact;

    get age() {
        return this.contact.data ? getSObjectValue(this.contact.data, Age__c_FIELD) : '';
    }
}