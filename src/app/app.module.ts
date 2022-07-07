import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './StudentComponents/login/login.component';
import { RegisterComponent } from './StudentComponents/register/register.component';
import { DashboardComponent } from './StudentComponents/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './StudentComponents/forget-password/forget-password.component';
import { VerifyEmailComponent } from './StudentComponents/verify-email/verify-email.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
