import { LightningElement,api } from 'lwc';

export default class Custom1 extends LightningElement {

 @api fname='';
 lname= '';
 fild='';

 get fullname()
 {
   return (this.fname).concat(this.lname).trim().toUpperCase();
 }
    handlechange(event)
    {
    this.fild=event.target.name;
if(this.fild ==='fname')
{
this.fname=event.target.value;
}
else{
this.lname=event.target.value;
}

    }

}