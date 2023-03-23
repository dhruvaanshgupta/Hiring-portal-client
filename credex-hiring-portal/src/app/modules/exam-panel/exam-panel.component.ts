import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { AuthService } from 'src/app/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-exam-panel',
  templateUrl: './exam-panel.component.html',
  styleUrls: ['./exam-panel.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class ExamPanelComponent implements OnInit {
  registerForm: FormGroup;
  secondFormGroup: FormGroup;
  isRegistered = false;
  public id: number;
  editdata: any;

  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private toastr: ToastrService
  ) {}

  loadForms() {
    this.registerForm = this.builder.group({
      experience: new FormControl('', Validators.required),
      language: new FormControl('', Validators.required),
      skills: new FormControl('', Validators.required),
      resumeLink: new FormControl('', Validators.required),
    });

    this.secondFormGroup = this.builder.group({
      agree: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadForms();
    const isRegistered = localStorage.getItem('isRegistered');
    if (isRegistered === 'true') {
      this.isRegistered = true;
    }
  }

  submit() {
    if (this.registerForm.valid) {
      const idstring = sessionStorage.getItem('id');
      const id = parseInt(idstring, 10);
      this.service.GetUser(id).subscribe((res) => {
        this.editdata = res;

        this.editdata.experience = this.registerForm.get('experience').value;
        this.editdata.language = this.registerForm.get('language').value;
        this.editdata.skills = this.registerForm.get('skills').value;
        this.editdata.resumeLink = this.registerForm.get('resumeLink').value;

        this.service.Updateuser(id, this.editdata).subscribe();
      });
    } else {
      this.registerForm.markAllAsTouched();
      this.secondFormGroup.markAllAsTouched();
    }
  }

  stateSetter() {
    if (this.registerForm.valid) {
      this.isRegistered = !this.isRegistered;
      localStorage.setItem('isRegistered', 'true');
    } else {
      this.registerForm.markAllAsTouched();
      this.secondFormGroup.markAllAsTouched();
    }
  }
}
