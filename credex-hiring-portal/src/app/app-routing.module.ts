import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CollegesComponent } from './modules/colleges/colleges.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { UserRolesComponent } from './modules/user-roles/user-roles.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,canActivate:[AuthGuard],
  children: [{
    path: 'dashboard',
    component: DashboardComponent
  },{
    path: 'colleges',
    component: CollegesComponent
  },{
    path: 'user-roles',
    component: UserRolesComponent
  }]
},{
  path: 'auth',
  component: AuthComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }