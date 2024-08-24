import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import {LoginformComponent } from './loginform/loginform.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginformComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
