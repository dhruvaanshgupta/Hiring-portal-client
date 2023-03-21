import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { AuthModule } from './auth/auth.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DataAddEditComponent } from './data-add-edit/data-add-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StudentsComponent } from './modules/students/students.component';
import { DrivesComponent } from './modules/drives/drives.component';
import { StudentDetailsComponent } from './modules/student-details/student-details.component';
import { QuestionsComponent } from './modules/questions/questions.component';
import { AddQuestionsComponent } from './modules/add-questions/add-questions.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { QuestionPaper1Component } from './modules/question-paper1/question-paper1.component';
import { MatCardActions } from '@angular/material/card';
import { FinalReportsComponent } from './modules/final-reports/final-reports.component';
import { UserRolesComponent } from './modules/user-roles/user-roles.component';
import { UserAddFormComponent } from './user-add-form/user-add-form.component';
import { ExamPanelComponent } from './modules/exam-panel/exam-panel.component';
import { ForbiddenComponent } from './modules/forbidden/forbidden.component';
import { ExamPortalComponent } from './modules/exam-portal/exam-portal.component';
import { StudentContactComponent } from './modules/student-contact/student-contact.component';



@NgModule({
  declarations: [
    AppComponent,
    DataAddEditComponent,
    StudentsComponent,
    DrivesComponent,
    StudentDetailsComponent,
    QuestionsComponent,
    AddQuestionsComponent,
    QuestionPaper1Component,
    FinalReportsComponent,
    UserRolesComponent,
    UserAddFormComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    AuthModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatCardModule,
    FormsModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
