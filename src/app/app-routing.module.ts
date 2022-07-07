import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './StudentComponents/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './StudentComponents/forget-password/forget-password.component';
import { LoginComponent } from './StudentComponents/login/login.component';
import { RegisterComponent } from './StudentComponents/register/register.component';
import { VerifyEmailComponent } from './StudentComponents/verify-email/verify-email.component';

const routes: Routes = [
  {path:'' , redirectTo:'login',pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'register',component: RegisterComponent},
  {path:'forgot-password',component: ForgetPasswordComponent},
  {path:'verify-email',component: VerifyEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
