import { LightningElement,api } from 'lwc';

export default class Barchildtest extends LightningElement {

    @api percentage;
    get getStyle() {
        return 'width:' + this.percentage + '%';
    }

}