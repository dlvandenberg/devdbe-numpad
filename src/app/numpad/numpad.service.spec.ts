import { TestBed } from '@angular/core/testing';

import { NumpadService } from './numpad.service';

describe('NumpadService', () => {
  let service: NumpadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumpadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
