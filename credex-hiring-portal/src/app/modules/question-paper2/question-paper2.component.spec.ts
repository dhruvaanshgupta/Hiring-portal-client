import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPaper2Component } from './question-paper2.component';

describe('QuestionPaper2Component', () => {
  let component: QuestionPaper2Component;
  let fixture: ComponentFixture<QuestionPaper2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionPaper2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionPaper2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
