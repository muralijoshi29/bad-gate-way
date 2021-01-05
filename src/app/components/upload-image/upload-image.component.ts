import { Component, OnInit } from '@angular/core';
import { FacadeService} from 'src/app/facade/facade.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {FormBuilder, FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  fileToUpload: File = null;
  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder,private _facadeService: FacadeService) { }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

uploadImageFile() {
  console.log("File name is",this.fileToUpload.name);
  this._facadeService.uploadImageFile(this.fileToUpload).subscribe(data => {
    // do something, if upload success
    }, error => {
      console.log(error);
    });
}

  ngOnInit() {
  }

}
