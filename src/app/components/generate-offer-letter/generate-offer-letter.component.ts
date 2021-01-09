import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {FormBuilder, FormGroup,FormControl,Validators} from '@angular/forms';
import { FacadeService} from 'src/app/facade/facade.service';
import { MatSnackBar } from '@angular/material';



const offerData = [
  {fieldName: "Company Name", fieldLable: '', index: '', alignment: '',fieldType:'',displayLabel:'',fieldValue:'',spaceAfter:''},
  {fieldName: "Company Street", fieldLable: '', index: '', alignment: '',fieldType:'',displayLabel:'',fieldValue:'',spaceAfter:''},
  {fieldName: "City", fieldLable: '', index: '', alignment: '',fieldType:'',displayLabel:'',fieldValue:'',spaceAfter:''},
  {fieldName: "Candidate Name", fieldLable: '', index: '', alignment: '',fieldType:'',displayLabel:'',fieldValue:'',spaceAfter:''},
  {fieldName: "Candidate Desig", fieldLable: '', index: '', alignment: '',fieldType:'',displayLabel:'',fieldValue:'',spaceAfter:''},
  {fieldName: "Candidate Addr", fieldLable: '', index: '', alignment: '',fieldType:'',displayLabel:'',fieldValue:'',spaceAfter:''},
  {fieldName: "Candidate Mob", fieldLable: '', index: '', alignment: '',fieldType:'',displayLabel:'',fieldValue:'',spaceAfter:''},
  {fieldName: "Subject", fieldLable: '', index: '', alignment: '',fieldType:'',displayLabel:'',fieldValue:'',spaceAfter:''},
  {fieldName: "Content 1", fieldLable: '', index: '', alignment: '',fieldType:'',displayLabel:'',fieldValue:'',spaceAfter:''},
  {fieldName: "Content 2", fieldLable: '', index: '', alignment: '',fieldType:'',displayLabel:'',fieldValue:'',spaceAfter:''},
  {fieldName: "Signature", fieldLable: '', index: '', alignment: '',fieldType:'',displayLabel:'',fieldValue:'',spaceAfter:''},
  {fieldName: "Footer", fieldLable: '', index: '', alignment: '',fieldType:'',displayLabel:'',fieldValue:'',spaceAfter:''},
]; 

const alignmentVal = [{name:"Left"},{name:"Right"},{name:"Center"}];

const type = [{name:"String"},{name:"Number"},{name:"TextArea"}];

const displayLable = [{name:"Yes",value:"Y"},{name:"No",value:"N"}];

@Component({
  selector: 'app-generate-offer-letter',
  templateUrl: './generate-offer-letter.component.html',
  styleUrls: ['./generate-offer-letter.component.css']
})




export class GenerateOfferLetterComponent implements OnInit {

 

displayedColumns: string[] = ['fieldName', 'fieldLable', 'index', 'alignment','fieldType','displayLabel','fieldValue','spaceAfter','action'];

dataSource = new MatTableDataSource<OfferLetter>();

fieldTypeList: Array<any> = [];
alignmentList:  Array<any> = [];
displayList:  Array<any> = [];
offerLetterList:  Array<any> = [];
templeteName: FormGroup;
offerForm: any = {};
rowName:String;
dynamicRow:any;
listOfferValue: any;


constructor(private route: ActivatedRoute,private formBuilder: FormBuilder,private _facadeService: FacadeService,private _snackBar: MatSnackBar) {
  this.route.params.subscribe( params => {
    if (params['id']){
      this.getOfferBasedOnId(params['id']);
    } else {
      this.dataSource = new MatTableDataSource<OfferLetter>(this.offerLetterList);
    }
    });
  
  for(var i=0;i<offerData.length;i++){
    this.offerLetterList.push(offerData[i]); 

  }
 
  this.getHeaderDetails();
  
  
}

getOfferBasedOnId(templeteId) {
  this._facadeService.getOfferBasedOnId(templeteId).subscribe(data =>{
    this.listOfferValue = data;
    console.log("data Value is",this.listOfferValue);
    this.offerForm.templateId = this.listOfferValue.templateId;
    this.dataSource = new MatTableDataSource<OfferLetter>(this.listOfferValue.offerConfigurationList)
    
  });
}
getHeaderDetails() {
  for(var i=0;i<alignmentVal.length;i++){
    this.alignmentList.push(alignmentVal[i]);    
  }
  for(var i=0;i<type.length;i++){
    this.fieldTypeList.push(type[i]);    
  }
  for(var i=0;i<displayLable.length;i++){
    this.displayList.push(displayLable[i]);    
  }
  
  

}
  ngOnInit() {
    this.templeteName = this.formBuilder.group({
      templateId: [{value:''}, [Validators.required]],
      
    });
  }
  generatePdf() {
    this.offerForm.offerConfigurationList = this.dataSource.data;
    this._facadeService.generateOfferPdf(this.offerForm).subscribe(data =>{
      console.log("PDF value is",data);
  const url= window.URL.createObjectURL(data);
  window.open(url);
  this._snackBar.open("Offer Letter has been generated", "Ok", {
    duration: 5000,
  });
    });
    console.log("Date Source Value is", this.offerForm);
  }

  addNewRow(rowName){
    this.dynamicRow = {fieldName: rowName, fieldLable: '', index: '', alignment: '',fieldType:'',displayLabel:'',fieldValue:'',spaceAfter:''},
    this.offerLetterList.push(this.dynamicRow);
    this.dataSource.data = this.offerLetterList;
  }
  deleteResource(index: number) {
    const data = this.dataSource.data;
    data.splice(index, 1);
    this.dataSource.data = data;
  }
} 




export interface OfferLetter {
  fieldName: string;
  fieldLable: string;
  index: string;
  alignment: string;
  fieldType: string;
  displayLabel: string;
  fieldValue: string
}