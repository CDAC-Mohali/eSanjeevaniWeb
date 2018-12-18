import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { HomeComponent } from './public/home.component';

import { LoginComponent } from './public/login.component';
import { LoginOTPComponent } from './public/login-otp.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuard } from './_guards/index';

const routes: Routes = [
  

   // App routes goes here here
   { 
    path: '',
    component: AppLayoutComponent, 
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent }
    ]
},

//no layout routes
{
  path: 'login',
  component: LoginComponent
},{
    path: 'LoginOTP',
    component: LoginOTPComponent
  },{
    path:'Home',
    component: HomeComponent
  },{ path: '**', redirectTo: '' }
    
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes),
      
    ],
    exports: [RouterModule],
    providers: []
  })
  
  export class AppRoutingModule {
  }




