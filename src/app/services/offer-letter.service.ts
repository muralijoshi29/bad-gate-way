import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferLetterService {

  constructor(private http: HttpClient) { }

  generateOfferPdf(offerForm) {
    return this.http.post(environment.URL+"sla/generate-offer/",offerForm);
  }
}
