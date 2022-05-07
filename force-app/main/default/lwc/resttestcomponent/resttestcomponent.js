import { LightningElement,track } from 'lwc';

export default class Resttestcomponent extends LightningElement {
@track myresponse;

getmydata()
{
const url1 = "https://www.binance.com/api/v1/ticker/24hr";
fetch(url1,{
 method: "GET"
}).then((response) => response.json())
  .then(repos => {
      this.myresponse = repos;
  });

}

}


