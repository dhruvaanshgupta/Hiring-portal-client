import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss'],
})
export class AddQuestionsComponent {
  question = {
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  };

  file: any;
  fileUploadUrl = '';

  constructor(private _route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {}

  formSubmit() {
    if (!this.question.content.trim()) {
      return;
    }
    if (!this.question.option1.trim()) {
      return;
    }
    if (!this.question.option2.trim()) {
      return;
    }
  }

  selectFile(event) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  uploadFile() {
    if (!this.file) {
      return;
    }

    const formData = new FormData();
    formData.append('file', this.file);

    this.http.post(this.fileUploadUrl, formData).subscribe();
  }
}
