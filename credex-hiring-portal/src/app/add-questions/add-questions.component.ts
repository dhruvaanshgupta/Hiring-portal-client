import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent {
[x: string]: any;

  question = {
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  }
  constructor(
    private _route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void { }

  file: any;

  formSubmit() {
    if (this.question.content.trim() == '' || this.question.content == null)
      return;
    if (this.question.option1.trim() == '' || this.question.option1 == null)
      return;
    if (this.question.option2.trim() == '' || this.question.option1 == null)
      return;
 }

  fileUploadUrl = "";
  selectFile(event) {
    this.file = event.target.files[0];
    console.log(this.file);
    }

  uploadFile() {
    let formData = new FormData();
    formData.append('file', this.file);

    this.http.post(this.fileUploadUrl, formData).subscribe();
  }


}
