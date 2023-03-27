import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent {
  fileUploaded: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  onFileSelected(event) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const contents = JSON.parse(e.target.result);
      this.uploadFile(contents);
    };
    reader.readAsText(file);
  }

  uploadFile(contents) {
    this.http.post('http://localhost:3000/questions', contents).subscribe(
      (response) => {
        this.toastr.success('Questions uploaded successfully');
        this.fileUploaded = true;
      },
      (error) => {
        this.toastr.error(
          'An error occurred while uploading the file. Please try again later'
        );
      }
    );
  }

  viewQuestions() {
    this.router.navigate(['/home/questionlist']);
  }
}
