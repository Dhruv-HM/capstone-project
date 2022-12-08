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


const routes: Routes=[
  {
    path:"home",
    component:EmailServiceComponent,
    canActivate:[RouteGuard]
  },
  {
    path:"login",
    component:LoginComponent,
    
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
