import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { CollegesService } from '../../app/modules/colleges.service';

@Component({
  selector: 'app-data-add-edit',
  templateUrl: './data-add-edit.component.html',
  styleUrls: ['./data-add-edit.component.scss']
})
export class DataAddEditComponent implements OnInit {
  empForm: FormGroup;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: CollegesService,
    private _dialogRef: MatDialogRef<DataAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
    collegeId : '',
    collegeName : '',
    location : '',
    courseOffered : '',
    contact : '',
    currentAccrediation : '',
    action : ''
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
    this.empForm.patchValue(this.data.collegeId);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
      if (this.data) {
        this._empService
          .updateCollege(this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('College detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._empService.addCollege(this.empForm.value).subscribe({
          
          next: (val: any) => {
            this._coreService.openSnackBar('College added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}