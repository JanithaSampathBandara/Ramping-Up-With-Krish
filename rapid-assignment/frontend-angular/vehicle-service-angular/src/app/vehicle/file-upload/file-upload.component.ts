import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  selectedFiles: File[] = [];
  // selectedFile: File = null;

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    // console.log('sf', this.selectedFile);
    console.log(this.selectedFiles);
  }

  // tslint:disable-next-line:typedef
  fileChange(event) {
    // console.log(event.target.files.item(0));
    // tslint:disable-next-line:prefer-const
    for (let file of event.target.files) {
      this.selectedFiles.push(file);
    }
    console.log(this.selectedFiles);
  //  console.log(event.target.files);
  //  this.selectedFiles.push(event.target.files);
  //  alert(`${this.selectedFiles} selected`);
  //  console.log('filled', this.selectedFiles);
  }

  upload(): void {

    // tslint:disable-next-line:prefer-const
    for (let file of this.selectedFiles) {
      this.fileService.uploadFile(file).subscribe((data) => {
        console.log('retrie', data);
      });
      console.log('helelelele');
    }

/*
    this.fileService.uploadFile(this.selectedFiles[0]).subscribe((data) => {
      console.log('retrie', data);
    }); */


    // alert(`${this.selectedFiles.length} files selected.`);
   /* for (let file of this.selectedFiles) {
      this.fileService.uploadFile(file).subscribe()
    } */
    // this.selectedFiles.push(this.selectedFile);
  }

}
