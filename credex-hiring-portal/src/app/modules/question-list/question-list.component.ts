import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  questions: any[] = [];
  
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.http.get('http://localhost:3000/questions').subscribe((questions: any[]) => {
      console.log('Questions fetched successfully:', questions);
      this.questions = questions;
    });
  }
}

