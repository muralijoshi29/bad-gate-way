import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import {FormBuilder, FormGroup,FormControl,Validators} from '@angular/forms';
import { FacadeService} from 'src/app/facade/facade.service';
import { DatePipe } from '@angular/common';



const optionalValue = [{name:"Yes",value:"Y"},{name:"No",value:"N"}];

const gender = [{name:"Male",value:"M"},{name:"Female",value:"F"}];

@Component({
  selector: 'app-health-insurance-quote',
  templateUrl: './health-insurance-quote.component.html',
  styleUrls: ['./health-insurance-quote.component.css'],
  providers: [DatePipe]
})



export class HealthInsuranceQuoteComponent implements OnInit {

healthForm : any = {};
optionalList: Array<any> = [];
genderVal:  Array<any> = [];
healthList: Array<any> = [];
formHealth:FormGroup;
isFormShow=true;
isSummaryShow=false;
isPaymentShow = false;
isPayDisable = false;
issuccesMsgShow = false;
successMsg:string;
customerName: String;
premiumAmount: Number;
dynamicRow:any;
cosumerName:any;
premiumValue:any;
premiumYear: Number;
myDate = new Date();
premiumDate:String;

  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder,private _facadeService: FacadeService,private datePipe: DatePipe) { 
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

  calculatePremium() {
    this.cosumerName = this.healthForm;
    console.log("Insurance data value",this.healthForm );
    this._facadeService.calculatePremium(this.healthForm).subscribe(data =>{
      console.log("Insurance data value",data );
      this.premiumValue = data;
      
      if(this.cosumerName.gender == "M") {
      this.customerName = "Mr."+this.premiumValue.name;
      } else {
        this.customerName = "Ms."+this.premiumValue.name;
      }
      this.premiumAmount = Number(this.premiumValue.premiumAmount);
      this.premiumYear = Number((new Date()).getFullYear());
      this.isSummaryShow = true;
      this.isFormShow = false;
      this.isPayDisable = false;
      
    });
  }

  makePayment() {
    this.isSummaryShow = true;
    this.isPaymentShow = true;
    this.isPayDisable = true;
  }

  payBillAmount(cardName) {
    this.premiumDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.dynamicRow = {year:this.premiumYear,amount:this.premiumAmount,paidDate:this.premiumDate,paymentMode:cardName};
    this.healthList.push(this.dynamicRow);
    this.healthForm.premium = this.healthList; 
    console.log("Payment for billing is",this.healthForm);
    this._facadeService.payPremiumBill(this.healthForm).subscribe(data =>{
      this.isSummaryShow = false;
      this.isPaymentShow = false;
      this.isFormShow = true;
      this.issuccesMsgShow = true;
      this.successMsg = "*Premium Paid Successfully, Further notification will be shared in mail";
      this.backToHome();
    });
    
  }

  backToHome() {
    this.isSummaryShow = false;
    this.isPaymentShow = false;
    this.isFormShow = true;
  }

}
