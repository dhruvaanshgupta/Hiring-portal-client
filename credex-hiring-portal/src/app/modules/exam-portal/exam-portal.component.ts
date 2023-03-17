import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-exam-portal',
  templateUrl: './exam-portal.component.html',
  styleUrls: ['./exam-portal.component.scss'],
})
export class ExamPortalComponent implements OnInit {
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  interval$: any;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  progress: string = '0';
  isQuizCompleted: boolean = false;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.getAllQuestion();
    this.startCounter(this.currentQuestion + 1);
    const isQuizCompleted = localStorage.getItem('isQuizCompleted');
    if (isQuizCompleted) {
      this.isQuizCompleted = JSON.parse(isQuizCompleted);
    }
  }

  getAllQuestion() {
    this.questionService.getQuestionJson().subscribe((res) => {
      this.questionList = res.questions;
    });
  }

  nextQuestion(currentQno: number) {
    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      localStorage.setItem('isQuizCompleted', JSON.stringify(true));
      this.stopCounter();
      const id = +sessionStorage.getItem('id');
    this.questionService.updateUserPoints(this.points, id).subscribe(() => {
      console.log('User points updated.');
    });
    }
    this.currentQuestion++;
    this.resetCounter();
  }

  previousQuestion() {
    this.currentQuestion--;
  }

  answer(currentQno: number, option: any) {
    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      localStorage.setItem('isQuizCompleted', JSON.stringify(true));
      this.stopCounter();
      const id = +sessionStorage.getItem('id');
    this.questionService.updateUserPoints(this.points, id).subscribe(() => {
      console.log('User points updated.');
    });
    }

    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
    }
  }

  startCounter(currentQno: number) {
    this.interval$ = interval(1000).subscribe((val) => {
      this.counter--;
      if (this.counter === 0) {
        if (currentQno === this.questionList.length) {
          this.isQuizCompleted = true;
          localStorage.setItem('isQuizCompleted', JSON.stringify(true));
          this.stopCounter();
          const id = +sessionStorage.getItem('id');
    this.questionService.updateUserPoints(this.points, id).subscribe(() => {
      console.log('User points updated.');
    });
        }
        this.currentQuestion++;
        this.counter = 60;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 6000000);
  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter(this.currentQuestion + 1);
  }

  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;
  }
}
