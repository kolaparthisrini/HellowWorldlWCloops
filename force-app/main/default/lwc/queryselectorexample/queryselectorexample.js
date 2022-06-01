import { LightningElement, track } from "lwc";

export default class Queryselectorexample extends LightningElement {
  @track
  fullname;
  testselector1(event) {
    console.log(event.target.lable);
    let abc = this.template.querySelector("lightning-input").value;
    this.fullname = abc;
  }
}
