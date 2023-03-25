import { Component, Inject, Input, OnInit } from '@angular/core';
import { StudentProfileDetailsService } from '../../student-profile-details.service';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FinalReportsComponent } from '../final-reports/final-reports.component';

@Component({
  selector: 'app-student-profile-details',
  templateUrl: './student-profile-details.component.html',
  styleUrls: ['./student-profile-details.component.scss'],
})
export class StudentProfileDetailsComponent implements OnInit {
  empForm: FormGroup<any>;
  studentdata: any;
  public id: number;

  constructor(
    private service: StudentProfileDetailsService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<StudentProfileDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {
    this.id = data.id;
    this.empForm = this.formBuilder.group({});
  }

  ngOnInit() {
    this.getStudentProfileDetails();
  }

  getStudentProfileDetails() {
    this.service.getStudentProfileDetails(this.id).subscribe((response) => {
      this.studentdata = response;
      console.log(this.studentdata);
    });
  }
}
