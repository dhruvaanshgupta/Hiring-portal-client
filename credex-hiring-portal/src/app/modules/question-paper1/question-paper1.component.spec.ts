import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPaper1Component } from './question-paper1.component';

describe('QuestionPaper1Component', () => {
  let component: QuestionPaper1Component;
  let fixture: ComponentFixture<QuestionPaper1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionPaper1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionPaper1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
