import { api, LightningElement } from 'lwc';

export default class Bartest extends LightningElement {
 p = 10;
 barprogress(event)
{
    this[event.target.name] = event.target.value <= 100 ? event.target.value : 100;

}

}