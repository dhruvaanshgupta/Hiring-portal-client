import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-student-contact',
  templateUrl: './student-contact.component.html',
  styleUrls: ['./student-contact.component.scss'],
})
export class StudentContactComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      user_name: ['', Validators.required],
      user_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
    emailjs.init('WdcU-jA-FDRTSVUZV');
  }

  onSubmit(): void {
    const btn = document.getElementById('button') as HTMLButtonElement;
    btn.value = 'Sending...';

    const serviceID = 'service_s1xvbg9';
    const templateID = 'template_e9juef1';
    emailjs.sendForm(serviceID, templateID, 'contact-form').then(
      (response: EmailJSResponseStatus) => {
        btn.value = 'Send Email';
        alert('Sent!');
      },
      (error) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(error));
      }
    );
  }
}
