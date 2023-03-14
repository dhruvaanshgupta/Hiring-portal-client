import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-question-paper1',
  templateUrl: './question-paper1.component.html',
  styleUrls: ['./question-paper1.component.scss']
})
export class QuestionPaper1Component implements OnInit {

  question: string[] = [
    'content',
    'option1',
    'option2',
    'option3',
    'option4'
  ]

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
