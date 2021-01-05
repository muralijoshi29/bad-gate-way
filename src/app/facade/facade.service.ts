import { Injectable, Injector  } from '@angular/core';
import { OfferLetterService } from '../services/offer-letter.service';
import { UploadImageService } from '../services/upload-image.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private injector: Injector) { }
  private _OfferLetterService: OfferLetterService;

  private _UploadImageService : UploadImageService;

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
    generateOfferPdf(offerForm){
      return this.OfferLetterService.generateOfferPdf(offerForm);

  }
   uploadImageFile(imageFile){
    return this.UploadImageService.uploadImageFile(imageFile);
  }

}
