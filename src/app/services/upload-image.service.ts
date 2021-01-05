import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http: HttpClient) { }

  uploadImageFile(imageFile){
    return this.http.post(environment.URL+"sla/generate-offer/",imageFile);
  }
}
