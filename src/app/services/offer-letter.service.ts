import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferLetterService {

  constructor(private http: HttpClient) { 
  }

  generateOfferPdf(offerForm) {
   
    return this.http.post(environment.OFFERURL+"offer/generate-offer/",offerForm,
    { headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }), responseType: 'blob'});
  }
  getOfferDetails() {
    return this.http.get(environment.OFFERURL+"offer/templates/");
  }

  getOfferBasedOnId(templateId) {
    return this.http.get(environment.OFFERURL+"offer/template/"+templateId);
  }

}
