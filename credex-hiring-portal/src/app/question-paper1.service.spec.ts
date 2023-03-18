import { TestBed } from '@angular/core/testing';

import { QuestionPaper1Service } from './question-paper1.service';

describe('QuestionPaper1Service', () => {
  let service: QuestionPaper1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionPaper1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
