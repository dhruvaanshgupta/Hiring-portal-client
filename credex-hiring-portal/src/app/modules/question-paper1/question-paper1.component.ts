import { Component, OnInit } from '@angular/core';

import { QuestionPaper1Service } from 'src/app/question-paper1.service';


@Component({
  selector: 'app-question-paper1',
  templateUrl: './question-paper1.component.html',
  styleUrls: ['./question-paper1.component.scss'],
})
export class QuestionPaper1Component implements OnInit {
  questions: any[] = [];

  constructor(private service: QuestionPaper1Service) {}

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.service.getQuestions().subscribe((response: any[]) => {
      this.questions = response;
      console.log(this.questions);
    });
  }
}
