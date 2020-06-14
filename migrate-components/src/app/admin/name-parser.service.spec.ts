import { TestBed } from '@angular/core/testing';

import { NameParserService } from './name-parser.service';

describe('NameParserService', () => {
  let service: NameParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
