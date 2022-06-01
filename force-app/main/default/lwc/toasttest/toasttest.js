import { LightningElement } from "lwc";
import {ShowToastEvent} from "lightning/platformShowToastEvent";

export default class Toasttest extends LightningElement {
       
    showInfoToast() {
      const even = new ShowToastEvent({
      title: 'Insert...',
      message: 'Inserted Record',
      variant: "success",
      mode: "dismissable"
    });
    this.dispatchEvent(even);
  }
  showInfoToastwarning() {
    const even = new ShowToastEvent({
    title: 'Insert...',
    message: 'U are about to reach Governor Limit',
    variant: "warning",
    duration: 200,
    mode: "dismissable"
  });
  this.dispatchEvent(even);
}
showInfoToastInfo() {
  const even = new ShowToastEvent({
  title: 'Insert...',
  message: 'Hi Srini',
  variant: "info",
  mode: "dismissable"
});
this.dispatchEvent(even);
}
}
