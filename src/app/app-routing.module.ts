import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './StudentComponents/dashboard/dashboard.component';
import { LoginComponent } from './StudentComponents/login/login.component';
import { RegisterComponent } from './StudentComponents/register/register.component';

const routes: Routes = [
  {path:'' , redirectTo:'login',pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'register',component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }