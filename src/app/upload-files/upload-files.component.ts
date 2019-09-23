import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent {
  files: any = [];

  uploadFile(event) {
    this.files = [];
    const element = event[0];
    this.files.push(element.name);
    console.log(this.files);
  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
  }

}
