import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import {ToastrModule } from 'ngx-toastr'
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [AuthComponent ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ToastrModule, NotifierModule],
  exports: [AuthComponent],
})
export class AuthModule {}
