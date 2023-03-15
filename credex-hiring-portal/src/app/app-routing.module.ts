import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CollegesComponent } from './modules/colleges/colleges.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { StudentsComponent } from './modules/students/students.component';
import { DrivesComponent } from './modules/drives/drives.component';
import { QuestionsComponent } from './modules/questions/questions.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { FinalReportsComponent } from './final-reports/final-reports.component';
import { QuestionPaper1Component } from './question-paper1/question-paper1.component';
import { QuestionPaper2Component } from './question-paper2/question-paper2.component';
import { QuestionPaper3Component } from './question-paper3/question-paper3.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'colleges',
        component: CollegesComponent,
      },
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        path: 'drives',
        component: DrivesComponent,
      },
      {
        path: 'questions',
        component: QuestionsComponent,
      },
      {
        path: 'add-questions',
        component: AddQuestionsComponent,
      },
      {
        path: 'approval',
        component: FinalReportsComponent,
      },
      {
        path: 'question-paper1',
        component: QuestionPaper1Component,
      },
      {
        path: 'question-paper2',
        component: QuestionPaper2Component,
      },
      {
        path: 'question-paper3',
        component: QuestionPaper3Component,
      },
      {
        path: 'final-reports',
        component: FinalReportsComponent
      }
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
