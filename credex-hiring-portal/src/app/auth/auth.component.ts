import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isSignUpMode = false;
  userdata: any;

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {
    sessionStorage.clear();
  }

  registerform = this.builder.group({
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
    roleId: this.builder.control('Student'),
  });

  // REGISTRATION

  proceedregisteration() {
    if (this.registerform.valid) {
      this.service.Proceedregister(this.registerform.value).subscribe({
        next: (result) => {
          this.toastr.success('Registered successfully');

          // Clear the form after successful registration
          this.registerform.reset();
          this.toggleMode();
        },
        error: (err) => {
          this.toastr.error('An error occurred while registering');
        },
      });
    } else {
      this.toastr.warning('Please enter valid data.');
    }
  }

  // Login

  loginform = this.builder.group({
    emailId: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  proceedlogin() {
    if (this.loginform.valid) {
      this.service
        .Getbycode(this.loginform.value.emailId)
        .subscribe((users: any[]) => {
          const user = users.find(
            (u) => u.emailId === this.loginform.value.emailId
          );
          console.log(user);
          if (
            user &&
            user.password.trim() === this.loginform.value.password.trim()
          ) {
            sessionStorage.setItem('emailId', user.emailId);
            sessionStorage.setItem('roleId', user.roleId);
            sessionStorage.setItem('id', user.id);
            this.service.navigate();
            //funtion call karega jo services mein karna
          } else {
            this.toastr.error('Invalid Credentials');
          }
        });
    }
  }

  ngOnInit(): void {
    const signInBtn = document.querySelector('#sign-in-btn') as HTMLElement;
    const signUpBtn = document.querySelector('#sign-up-btn') as HTMLElement;
    const container = document.querySelector('.container') as HTMLElement;

    signUpBtn.addEventListener('click', () => {
      this.isSignUpMode = true;
      container.classList.add('sign-up-mode');
    });

    signInBtn.addEventListener('click', () => {
      this.isSignUpMode = false;
      container.classList.remove('sign-up-mode');
    });
  }

  toggleMode() {
    this.isSignUpMode = !this.isSignUpMode;
  }
}
