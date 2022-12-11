import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  EmailServiceComponent  from './components/email-service/email-service.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { RouteGuard } from './route-guard';
import { HeaderComponent } from './components/header/header.component';
import { BaseComponent } from './components/base/base.component';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { HomeComponent } from './components/home/home.component';
import { AddVideoComponent } from './components/add-video/add-video.component';


const routes: Routes=[
  {
    path:"",
    component:BaseComponent,

  },
  {
    path:"home",
    component:EmailServiceComponent,
    canActivate:[RouteGuard]
  },
  {
    path:"login",
    component:LoginComponent,
    
  },

  {
    path:"profile",
    component:ProfileComponent,
    canActivate:[RouteGuard]
  },

  {
    path:"add-video",
    component:AddVideoComponent,
    canActivate:[RouteGuard]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    EmailServiceComponent,
    ProfileComponent,
    LoginComponent,
    HeaderComponent,
    BaseComponent,
    AllCategoriesComponent,
    HomeComponent,
    AddVideoComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
