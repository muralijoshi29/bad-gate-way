import { Component, OnInit,ElementRef, Input, ViewChild, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FacadeService } from 'src/app/facade/facade.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  

  jwt : any;

 
  aFormGroup: FormGroup;

  login:any={};

  userName:any;


  constructor(private _facadeService: FacadeService,private router: Router,private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }



  

  

  loginLiscence(){
    this.userName = this.login.username;
    this._facadeService.login(this.login).subscribe(data => {
      this.jwt=data;
      sessionStorage.setItem("accessToken",this.jwt.accessToken);
      sessionStorage.setItem("LOGGED_USER",this.userName);
      this.router.navigate(['/listuser/']);
    }, error => {
      this._snackBar.open("Login Failed or Number of maximum allowed users exceeded ", "Ok", {
      duration: 2000,
    });
  });
}

  // private render( element : HTMLElement, config ) : number {
  //   return grecaptcha.render(element, config);
  // }

  
  ngOnInit() {
  this.aFormGroup = this.formBuilder.group({
  email: ['', Validators.required],
  password: ['', Validators.required],
    });

  
  }

}


