import { Injectable, Injector  } from '@angular/core';
import { OfferLetterService } from '../services/offer-letter.service';
import { UploadImageService } from '../services/upload-image.service';
import { HealthInsuranceService } from '../services/health-insurance.service';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private injector: Injector) { }
  private _OfferLetterService: OfferLetterService;

  private _UploadImageService : UploadImageService;

  private _HealthInsuranceService : HealthInsuranceService;

  private _LoginService : LoginService;

  public get OfferLetterService(): OfferLetterService {
    if(!this._OfferLetterService){
      this._OfferLetterService = this.injector.get(OfferLetterService);
    }
    return this._OfferLetterService;
  }

  public get UploadImageService(): UploadImageService {
    if(!this._UploadImageService){
      this._UploadImageService = this.injector.get(UploadImageService);
    }
    return this._UploadImageService;
  }

  public get HealthInsuranceService(): HealthInsuranceService {
    if(!this._HealthInsuranceService){
      this._HealthInsuranceService = this.injector.get(HealthInsuranceService);
    }
    return this._HealthInsuranceService;
  }

  public get LoginService(): LoginService {
    if(!this._LoginService){
      this._LoginService = this.injector.get(LoginService);
    }
    return this._LoginService;
  }

    generateOfferPdf(offerForm){
      return this.OfferLetterService.generateOfferPdf(offerForm);

  }
   uploadImageFile(imageFile){
    return this.UploadImageService.uploadImageFile(imageFile);
  }

  calculatePremium(healthForm) {
    return this.HealthInsuranceService.calculatePremium(healthForm);
  }

  payPremiumBill(healthForm) {
    return this.HealthInsuranceService.payPremiumBill(healthForm);
  }

  login(loginData) {
    return this.LoginService.login(loginData);
  }

  getUserDetails(){
    return this.LoginService.getUserDetails();
  }

  logOut() {
    return this.LoginService.logOut();
  }

  chatBotOpen(){
    return this.UploadImageService.chatBotOpen();
  }

  getOfferDetails() {
    return this.OfferLetterService.getOfferDetails();
  }

  getOfferBasedOnId(templeteId) {
    return this.OfferLetterService.getOfferBasedOnId(templeteId);
  }

}
