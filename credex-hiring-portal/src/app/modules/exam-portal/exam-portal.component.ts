import { Component, HostListener, OnInit } from '@angular/core';
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
  isWarningShown: boolean = false;
  private timeoutId: ReturnType<typeof setTimeout> | undefined;
  private switchTabCount: number = 0;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.getAllQuestion();
    this.startCounter(this.currentQuestion + 1);
    const isQuizCompleted = localStorage.getItem('isQuizCompleted');
    if (isQuizCompleted) {
      this.isQuizCompleted = JSON.parse(isQuizCompleted);
    }
    window.addEventListener('blur', this.handleBlur.bind(this));
    window.addEventListener('focus', this.handleFocus.bind(this));
    document.addEventListener('contextmenu', this.handleRightClick);
  }

  ngOnDestroy(): void {
    window.removeEventListener('blur', this.handleBlur.bind(this));
    window.removeEventListener('focus', this.handleFocus.bind(this));
    document.removeEventListener('contextmenu', this.handleRightClick);
  }

  getAllQuestion() {
    this.questionService.getQuestionJson().subscribe((res) => {
      console.log(res[0].questions);
      this.questionList = res[0].questions;
    });
  }

  handleRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  @HostListener('document:visibilitychange', ['$event'])
  onVisibilityChange(event: Event) {
    if (document.hidden) {
      if (!this.isQuizCompleted) {
        this.handleBlur();
      }
    } else {
      if (!this.isQuizCompleted) {
        this.handleFocus();
      }
    }
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

  // previousQuestion() {
  //   this.currentQuestion--;
  // }

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

  handleBlur() {
    if (this.isQuizCompleted) {
      return;
    }
    
    this.timeoutId = setTimeout(() => {
      if (!document.hasFocus() && !this.isWarningShown) {
        alert("Warning: You have left the test tab. Please return to the test and do not leave the tab again, or your test will be auto-submitted.");
        this.switchTabCount++;
        this.isWarningShown = true;
      }
    }, 10);
  }
  
  handleFocus() {
    if (this.isQuizCompleted) {
      return;
    }
    
    clearTimeout(this.timeoutId);
    if (this.isWarningShown && this.switchTabCount===2) {
      alert("Warning: Your test has been auto-submitted due to leaving the test tab multiple times.");
      this.submitTest();
    }
    this.isWarningShown = false;
  }

  submitTest() {
    this.isQuizCompleted = true;
    localStorage.setItem('isQuizCompleted', JSON.stringify(true));
    this.stopCounter();
    const id = +sessionStorage.getItem('id');
    this.questionService.updateUserPoints(this.points, id).subscribe(() => {
      console.log('User points updated.');
    });
    
    window.removeEventListener('blur', this.handleBlur.bind(this));
    window.removeEventListener('focus', this.handleFocus.bind(this));
  }
  
}
