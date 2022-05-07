import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

@track
name = 'srinivas';

callme(event)
{
this.name = event.target.value;
}


}