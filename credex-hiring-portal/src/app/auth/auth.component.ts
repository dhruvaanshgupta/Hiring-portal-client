import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormControlName,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from './auth.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isSignUpMode = false;

  constructor(private builder: FormBuilder, private toastr: ToastrService, 
    private service: AuthService) { }

  registerform = this.builder.group({
    firstName: this.builder.control('', Validators.required),
    lastName: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    contact: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])),
    emailId: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    roleId: this.builder.control('')
  });
  proceedregisteration() {
    if (this.registerform.valid) {
      this.service.Proceedregister(this.registerform.value).subscribe({
        next: result => {
          this.toastr.success('Registered successfully');
          this.toggleMode();
          // Clear the form after successful registration
          this.registerform.reset();
        },
        error: err => {
          this.toastr.error('An error occurred while registering');
        }
      });
    } else {
      this.toastr.warning('Please enter valid data.');
    }
  }
  

  
  userdata : any;

  loginform = this.builder.group({
    email:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required)
  })

  proceedlogin() {
    if (this.loginform.valid) {
      this.service.Getbycode(this.loginform.value.email).subscribe(res=>{
        this.userdata = res;
        console.log(res)
      })
    }
  }

  ngOnInit(): void {
    const signInBtn = document.querySelector("#sign-in-btn") as HTMLElement;
    const signUpBtn = document.querySelector("#sign-up-btn") as HTMLElement;
    const container = document.querySelector(".container") as HTMLElement;

    signUpBtn.addEventListener("click", () => {
      this.isSignUpMode = true;
      container.classList.add("sign-up-mode");
    });

    signInBtn.addEventListener("click", () => {
      this.isSignUpMode = false;
      container.classList.remove("sign-up-mode");
    });
  }

  toggleMode() {
    this.isSignUpMode = !this.isSignUpMode;
  }
}
