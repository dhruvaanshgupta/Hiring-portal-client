import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CollegesComponent } from './modules/colleges/colleges.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { StudentsComponent } from './modules/students/students.component';
import { DrivesComponent } from './modules/drives/drives.component';
import { QuestionsComponent } from './modules/questions/questions.component';
import { AddQuestionsComponent } from './modules/add-questions/add-questions.component';
import { FinalReportsComponent } from './modules/final-reports/final-reports.component';
import { QuestionPaper1Component } from './modules/question-paper1/question-paper1.component';
import { UserRolesComponent } from './modules/user-roles/user-roles.component';
import { AuthGuard } from './auth/auth.guard';
import { ExamPanelComponent } from './modules/exam-panel/exam-panel.component';
import { ForbiddenComponent } from './modules/forbidden/forbidden.component';
import { StudentContactComponent } from './modules/student-contact/student-contact.component';
import { FaqComponent } from './modules/faq/faq.component';



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
  },{
    path: 'contact',
    component: StudentContactComponent,canActivate:[AuthGuard],data:{roleId:'Student'}
  },{
    path: 'faq',
    component: FaqComponent,canActivate:[AuthGuard],data:{roleId:'Student'}
  },
      {
        path: 'candidates',
        component: StudentsComponent,canActivate:[AuthGuard], data:{roleId:'Admin'}
      },
      {
        path: 'drives',
        component: DrivesComponent,canActivate:[AuthGuard], data:{roleId:'Admin'}
      },
      {
        path: 'questions',
        component: QuestionsComponent,canActivate:[AuthGuard], data:{roleId:'Admin'}
      },
      {
        path: 'add-questions',
        component: AddQuestionsComponent,canActivate:[AuthGuard], data:{roleId:'Admin'}
      },
      {
        path: 'question-paper1',
        component: QuestionPaper1Component,canActivate:[AuthGuard], data:{roleId:'Admin'}
      },
      {
        path: 'approval',
        component: FinalReportsComponent,canActivate:[AuthGuard], data:{roleId:'Admin'}
      },]
},{
  path: 'auth',
  component: AuthComponent
},{
  path: 'forbidden',
  component: ForbiddenComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
