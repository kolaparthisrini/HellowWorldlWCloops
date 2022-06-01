import { LightningElement, track } from "lwc";

export default class Calc extends LightningElement {
  @track output;
  num1;
  num2;

  hanldled(event) {
    if (event.target.name === "a") {
      this.num1 = event.target.value;
    } else {
      this.num2 = event.target.value;
    }
  }
  calculate(event) {
    if (event.target.name === "add")
      this.output = parseInt(this.num1, 10) + parseInt(this.num2, 10);
    if (event.target.name === "sub")
      this.output = parseInt(this.num1, 10) - parseInt(this.num2, 10);
    if (event.target.name === "mult")
      this.output = parseInt(this.num1, 10) * parseInt(this.num2, 10);
    if (event.target.name === "divide")
      this.output = parseInt(this.num1, 10) / parseInt(this.num2, 10);
  }
}
