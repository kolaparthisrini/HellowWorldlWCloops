import { LightningElement } from 'lwc';

export default class Foreachtest extends LightningElement {
 
   status = false;
    con = [
     {
      Id: '1',
      FirstName: 'Srinivas'
     },
     {
        Id: '2',
        FirstName: 'Srikanth'
     },
     {
        Id: '3',
        FirstName: 'Chakri'
     }

    ];


}