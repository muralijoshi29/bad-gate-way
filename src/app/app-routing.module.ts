import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GenerateOfferLetterComponent} from './components/generate-offer-letter/generate-offer-letter.component';
import {HealthInsuranceQuoteComponent} from './components/health-insurance-quote/health-insurance-quote.component';
import {UploadImageComponent} from './components/upload-image/upload-image.component';
import {HomeScreenComponent} from './components/home-screen/home-screen.component';
import {LoginScreenComponent} from './components/login-screen/login-screen.component';
import {ListUsersComponent} from './components/list-users/list-users.component';
import {OfferLetterListComponent} from './components/offer-letter-list/offer-letter-list.component';


const routes: Routes = [{
  path: 'generate-offer',
  component: GenerateOfferLetterComponent
},
{
  path: 'generate-offer/:id',
  component: GenerateOfferLetterComponent
},
 {
  path: 'health-insurance-quote',
  component: HealthInsuranceQuoteComponent
  },
  {
    path: 'upload-image',
    component: UploadImageComponent
    },
    {
      path: 'home',
      component: HomeScreenComponent
      },
      {
        path: 'login',
        component: LoginScreenComponent
      },
      { path: 'listuser',
      component:ListUsersComponent
      },
      { path: 'list-offer',
      component:OfferLetterListComponent
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
