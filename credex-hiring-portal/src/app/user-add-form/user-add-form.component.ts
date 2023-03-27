import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.scss'],
})
export class UserAddFormComponent implements OnInit {
  userForm: FormGroup;
  rolelist: any;
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private dialogRef: MatDialogRef<UserAddFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService
  ) {
    this.userForm = this.builder.group({
      firstName: this.builder.control('', Validators.required),
      lastName: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required),
      contact: this.builder.control('', Validators.required),
      emailId: this.builder.control(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      roleId: this.builder.control('', Validators.required),
    });
  }
  ngOnInit(): void {
    this.service.GetAllRole().subscribe((res) => {
      this.rolelist = res;
    });
    this.userForm.patchValue(this.data);
  }
  onFormSubmit() {
    if (this.userForm.valid) {
      this.service.ProceedRegister(this.userForm.value).subscribe({
        next: (val: any) => {
          this.toastr.success('User added successfully');
          this.dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }
}
