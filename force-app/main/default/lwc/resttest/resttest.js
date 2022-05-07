import { LightningElement,track } from 'lwc';

export default class Resttest extends LightningElement {


   
    @track myrestobj;
    

    getCurrentPrice(){
    const url1 = "https://www.binance.com/api/v1/ticker/24hr";
    fetch(url1, {
        method: "GET"
    }).then((response) => response.json())
        .then(repos => {
            this.myrestobj = repos;       
        });
    
    }


}