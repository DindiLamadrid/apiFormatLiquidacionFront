import { TestBed } from '@angular/core/testing';

import { HistorysalaryService } from './historysalary.service';

describe('HistorysalaryService', () => {
  let service: HistorysalaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorysalaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
