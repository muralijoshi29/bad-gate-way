import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import {FormBuilder, FormGroup,FormControl,Validators} from '@angular/forms';
import { FacadeService} from 'src/app/facade/facade.service';


const optionalValue = [{name:"Yes",value:"Y"},{name:"No",value:"N"}];

const gender = [{name:"Male",value:"M"},{name:"Female",value:"F"}];

@Component({
  selector: 'app-health-insurance-quote',
  templateUrl: './health-insurance-quote.component.html',
  styleUrls: ['./health-insurance-quote.component.css']
})



export class HealthInsuranceQuoteComponent implements OnInit {

healthForm = {};
optionalList: Array<any> = [];
genderVal:  Array<any> = [];
formHealth:FormGroup;
isFormShow=true;
isSummaryShow=false;
isPaymentShow = false;
isPayDisable = false;
customerName: String;
premiumAmount: Number;
premiumYear: Number;
cosumerName:any;


  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder,private _facadeService: FacadeService) { 
    this.getHeaderDetails();
    
  }

  getHeaderDetails() {
    for(var i=0;i<optionalValue.length;i++){
      this.optionalList.push(optionalValue[i]);
    }
    for(var i=0;i<gender.length;i++){
     this.genderVal.push(gender[i]);
    }

  }



  ngOnInit() {
    this.formHealth = this.formBuilder.group({
      name: [{value:''}, [Validators.required]],
      gender: [{value:''}, [Validators.required]],
      age: [{value:''}, [Validators.required]],
      hypertension: [{value:''}, [Validators.required]],     
      bloodPressure: [{value:''}, [Validators.required]],  
      bloodSugar: [{value:''}, [Validators.required]],
      overWeight: [{value:''}, [Validators.required]],
      smoking: [{value:''}, [Validators.required]],
      alcohol: [{value:''}, [Validators.required]],
      dailyExcercise: [{value:''}, [Validators.required]],
      drugs: [{value:''}, [Validators.required]],
    });
  }

  submitQueries() {
    this.cosumerName = this.healthForm;
    console.log("Health form data",this.healthForm)
    if(this.cosumerName.gender == "M") {
    this.customerName = "Mr."+this.cosumerName.name;
    } else {
      this.customerName = "Ms."+this.cosumerName.name;
    }
    this.premiumAmount = Number("6586");
    this.premiumYear = Number("2020");
    this.isSummaryShow = true;
    this.isFormShow = false;
    this.isPayDisable = false;
  }

  makePayment() {
    this.isSummaryShow = true;
    this.isPaymentShow = true;
    this.isPayDisable = true;
  }

  backToHome() {
    this.isSummaryShow = false;
    this.isPaymentShow = false;
    this.isFormShow = true;
  }

}
