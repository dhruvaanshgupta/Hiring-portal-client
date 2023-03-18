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
  public id: number;

  constructor(
    private service: StudentDetailsService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {
    this.id = data.id;
  }

  ngOnInit() {
    this.getStudentDetails();
  }

  getStudentDetails() {
    this.service.getStudentDetailsById(this.id).subscribe((response) => {
      this.studentdata = response;
      console.log(response);
    });
  }
}

