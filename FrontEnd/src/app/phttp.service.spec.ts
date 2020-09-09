import { TestBed } from '@angular/core/testing';

import { PhttpService } from './phttp.service';

describe('PhttpService', () => {
  let service: PhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
