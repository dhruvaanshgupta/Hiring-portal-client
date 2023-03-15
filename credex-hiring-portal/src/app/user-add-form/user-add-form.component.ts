import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../auth/auth.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.scss'],
})
export class UserAddFormComponent implements OnInit {
  empForm: FormGroup;
  rolelist: any;
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private _dialogRef: MatDialogRef<UserAddFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this.builder.group({
      firstName: this.builder.control('', Validators.required),
      lastName: this.builder.control('', Validators.required),
      password: this.builder.control(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ])
      ),
      contact: this.builder.control(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        ])
      ),
      emailId: this.builder.control(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      roleId: this.builder.control('',Validators.required),
    });
  }
  ngOnInit(): void {
    this.service.GetAllRole().subscribe((res) => {
      this.rolelist = res;
    });
    this.empForm.patchValue(this.data);
  }
  onFormSubmit() {
    console.log(this.empForm);
    if (this.empForm.valid) {
      console.log('entering loop');
      this.service.Proceedregister(this.empForm.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('User added successfully');
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }
}
