import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CollegesComponent } from './modules/colleges/colleges.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { UserRolesComponent } from './modules/user-roles/user-roles.component';
import { AuthGuard } from './auth/auth.guard';
import { ExamPanelComponent } from './modules/exam-panel/exam-panel.component';
import { ForbiddenComponent } from './modules/forbidden/forbidden.component';


const routes: Routes = [{
  path: 'home',
  component: DefaultComponent,canActivate:[AuthGuard],
  children: [{
    path: 'dashboard',
    component: DashboardComponent,canActivate:[AuthGuard], data:{roleId:'Admin'}
  },{
    path: 'colleges',
    component: CollegesComponent,canActivate:[AuthGuard],data:{roleId:'Admin'}
  },{
    path: 'user-roles',
    component: UserRolesComponent,canActivate:[AuthGuard],data:{roleId:'Admin'}
  },{
    path: 'exam',
    component: ExamPanelComponent,canActivate:[AuthGuard],data:{roleId:'Student'}
  }]
},{
  path: 'auth',
  component: AuthComponent
},{
  path: 'forbidden',
  component: ForbiddenComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }