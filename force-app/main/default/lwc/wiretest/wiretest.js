import { LightningElement, wire} from  'lwc';
import getAccounts from  '@salesforce/apex/AccountController.getAccounts';
export  default  class  IterationComp  extends  LightningElement {
    @wire(getAccounts) contacts;
}