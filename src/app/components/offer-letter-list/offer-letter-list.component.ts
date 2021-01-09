import { Component, OnInit } from '@angular/core';
import { FacadeService } from 'src/app/facade/facade.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-offer-letter-list',
  templateUrl: './offer-letter-list.component.html',
  styleUrls: ['./offer-letter-list.component.css']
})
export class OfferLetterListComponent implements OnInit {

  displayedColumns: string[] = ['templeteId'];
  dataSource = new MatTableDataSource<Templete>();
  templeteList: any;
  constructor(private _facadeService: FacadeService) { 
  this.getOfferDetails();
  }

getOfferDetails() {
  this._facadeService.getOfferDetails().subscribe(data => {
    console.log("Offer details value is",data);
   ;
    this.templeteList = data;
    this.dataSource = new MatTableDataSource<Templete>(this.templeteList);
  });
}

  ngOnInit() {
  }

}

export interface Templete {
  templateId: string;
  offerConfigurationList:any;
  
}