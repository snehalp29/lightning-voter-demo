import { TestBed } from '@angular/core/testing';

import { CurrentIdentityService } from './current-identity.service';

describe('CurrentIdentityService', () => {
  let service: CurrentIdentityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentIdentityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
