import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GenerateOfferLetterComponent} from './components/generate-offer-letter/generate-offer-letter.component';
import {HealthInsuranceQuoteComponent} from './components/health-insurance-quote/health-insurance-quote.component';
import {UploadImageComponent} from './components/upload-image/upload-image.component';


const routes: Routes = [{
  path: 'generate-offer',
  component: GenerateOfferLetterComponent
},
 {
  path: 'health-insurance-quote',
  component: HealthInsuranceQuoteComponent
  },
  {
    path: 'upload-image',
    component: UploadImageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
