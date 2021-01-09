import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})



export class LoginService {

  constructor(private http: HttpClient) { 
   
  }
  login(login) {
    console.log("data Value",login)
    return this.http.post(environment.LICSENCEOFFER+"auth/generatetoken",login);
  }

  getUserDetails() {
    const token = sessionStorage.getItem("accessToken");
    return this.http.get(environment.LICSENCEOFFER+"tracker/online-users",{ headers: new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
    }) });
  }
  logOut() {
    const token = sessionStorage.getItem("accessToken");
    return this.http.get(environment.LICSENCEOFFER+"tracker/logout",{ headers: new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
    }), responseType: "text" });
  }

}

