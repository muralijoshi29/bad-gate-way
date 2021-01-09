import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FacadeService} from 'src/app/facade/facade.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router, ActivatedRoute } from '@angular/router';
import {​​​​​interval}​​​​​ from'rxjs';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  displayedColumns: string[] = ['username', 'status'];
  dataSource = new MatTableDataSource<Licsence>();
  listUser: any;
  logginUser: any;
  deviceInfo:any;
  browser:any;
  deviceType: any;
  syaOS:any

  constructor(private _facadeService: FacadeService,private router: Router, private deviceService: DeviceDetectorService) { 
     
    interval(2000).subscribe(
     (val) => {
      if(sessionStorage.getItem("LOGGED_USER") != null && sessionStorage.getItem("LOGGED_USER") != undefined) {
        this.getUserDetails();
      }
       }
     )
    
 
  }
getUserDetails() {
  
  this.deviceInfo = this.deviceService.getDeviceInfo();
  this.browser = this.deviceInfo.browser;
  this.deviceType = this.deviceInfo.deviceType;
  this.syaOS = this.deviceInfo.os;
  this.logginUser = sessionStorage.getItem("LOGGED_USER");
  
  this._facadeService.getUserDetails().subscribe(data =>{
    this.listUser = data
    this.dataSource = new MatTableDataSource<Licsence>(this.listUser.userVOs);
  });
}

logOut() {
  this._facadeService.logOut().subscribe(data =>{
    console.log("log out value is",data);
    sessionStorage.clear();
    this.router.navigate(['/login/']);
   
  }); 
}


  ngOnInit() {
  }

}

export interface Licsence {
  userName: string;
  active: string;
  
}