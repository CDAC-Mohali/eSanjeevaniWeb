import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule, FormGroup, FormControl, Validators,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { LoginOTPComponent } from './public/login-otp.component';

import { LoginComponent } from './public/login.component';
import { AppRoutingModule } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './public/home.component';

import { ProfileComponent } from './profile/profile.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
//import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module';


import { AuthGuard } from './_guards/index';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatInputModule,MatFormFieldModule,MatMenuModule,MatTableModule,MatCardModule,MatProgressSpinnerModule,MatGridListModule} from '@angular/material';
import { PublicService,StorageService,Client } from './services/index';


@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent, 
    DashboardComponent,  AppLayoutComponent, SiteLayoutComponent, AppHeaderComponent, SiteHeaderComponent, SiteFooterComponent, HomeComponent, ProfileComponent ,LoginOTPComponent
  
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule, FormsModule ,BrowserAnimationsModule,MatButtonModule, MatCheckboxModule,MatInputModule,MatFormFieldModule,MatMenuModule,MatTableModule,MatCardModule,MatFormFieldModule,MatProgressSpinnerModule,MatGridListModule
  ],
  providers: [ Client,PublicService,StorageService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
