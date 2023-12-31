import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestModule } from './test/test.module';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { ErrorsComponent } from './shared/errors/errors.component';
import { ActivatedRoute } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http'
@NgModule({
  //la liste des composants attachés à  ce module
  declarations: [
    AppComponent,
    TestComponent,
    ResidencesComponent,
    ApartmentsComponent,
    FormResidenceComponent,
    NotFoundComponent,
    FormApartmentComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //pour pouvoir utiliser la directive ngModel
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  //les composants à appeler dans le fichier index.html
  bootstrap: [AppComponent]
})
export class AppModule { }