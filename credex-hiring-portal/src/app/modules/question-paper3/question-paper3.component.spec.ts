import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPaper3Component } from './question-paper3.component';

describe('QuestionPaper3Component', () => {
  let component: QuestionPaper3Component;
  let fixture: ComponentFixture<QuestionPaper3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionPaper3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionPaper3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
