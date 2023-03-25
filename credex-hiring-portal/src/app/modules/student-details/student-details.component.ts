import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentDetailsService } from '../../student-details.service';
import { StudentService } from '../../students.service';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
  empForm: FormGroup<any>;

  studentdata: any;
  public userId: number;

  constructor(
    private dialogRef: MatDialogRef<StudentDetailsComponent>,
    private formBuilder: FormBuilder,
    private service: StudentDetailsService,
    @Inject(MAT_DIALOG_DATA) public data: { userId: number }
  ) {
    this.userId = data.userId;
    this.empForm = this.formBuilder.group({});
  }

  ngOnInit() {
    this.getStudentDetails();
  }

  getStudentDetails() {
    console.log(this.data.userId)
    console.log(this.userId);
    this.service.getStudentDetailsById(this.userId).subscribe((response) => {
      this.studentdata = response;
    });
  }
}

