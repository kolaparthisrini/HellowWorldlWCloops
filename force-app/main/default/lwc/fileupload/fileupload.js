import { LightningElement,track } from 'lwc';
export default class Fileupload extends LightningElement {

        @track lstAllFiles = [];

        get acceptedFormats() {
            return ['.pdf','.png','.jpg'];
        }
    
        handleUploadFinished(event) {
            // Get the list of uploaded files
            const lstUploadedFiles = event.detail.files;
            lstUploadedFiles.forEach(fileIterator => this.lstAllFiles.push(fileIterator.name));
        }
}
