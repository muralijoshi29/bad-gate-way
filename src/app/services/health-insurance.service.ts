import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HealthInsuranceService {

  
  constructor(private http: HttpClient) { }
  
  calculatePremium(healthForm) {
    return this.http.post(environment.INSURANCEURL+"premium-qutation/",healthForm);
  }

  payPremiumBill(healthForm) {
    return this.http.post(environment.INSURANCEURL+"premium-and-payment/",healthForm);
  }

}
