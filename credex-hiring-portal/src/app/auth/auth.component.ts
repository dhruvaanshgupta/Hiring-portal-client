import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isSignUpMode = false;

  constructor() { }

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
