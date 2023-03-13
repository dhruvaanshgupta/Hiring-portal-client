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
        component: AddQuestionsComponent
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
export class AppRoutingModule {}
