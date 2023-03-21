import { TestBed } from '@angular/core/testing';

import { FinalReportsService } from './services/final-reports.service';

describe('FinalReportsService', () => {
  let service: FinalReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
