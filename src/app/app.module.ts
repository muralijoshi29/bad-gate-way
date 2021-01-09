import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GenerateOfferLetterComponent } from './components/generate-offer-letter/generate-offer-letter.component';
import { HealthInsuranceQuoteComponent } from './components/health-insurance-quote/health-insurance-quote.component';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule }    from '@angular/common/http';

import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { DeviceDetectorService } from 'ngx-device-detector';

import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { OfferLetterListComponent } from './components/offer-letter-list/offer-letter-list.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { HealthInsuranceService } from './services/health-insurance.service';
import { OfferLetterService } from './services/offer-letter.service';
import { UploadImageService } from './services/upload-image.service';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import{MatToolbarModule} from '@angular/material/toolbar';
import { ListUsersComponent } from './components/list-users/list-users.component';



@NgModule({
  declarations: [
    AppComponent,
    GenerateOfferLetterComponent,
    HealthInsuranceQuoteComponent,
    OfferLetterListComponent,
    UploadImageComponent,
    HomeScreenComponent,
    LoginScreenComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTabsModule,
    MatListModule,
    HttpClientModule,
    MatToolbarModule,
    MatSnackBarModule,
    
    RouterModule
  ],
  providers: [
    HealthInsuranceService,
    DeviceDetectorService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

