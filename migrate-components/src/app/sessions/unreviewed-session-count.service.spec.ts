import { TestBed } from '@angular/core/testing';

import { UnreviewedSessionCountService } from './unreviewed-session-count.service';

describe('UnreviewedSessionCountService', () => {
  let service: UnreviewedSessionCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnreviewedSessionCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
