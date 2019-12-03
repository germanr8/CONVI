import { TestBed } from '@angular/core/testing';

import { GobService } from './gob.service';

describe('GobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GobService = TestBed.get(GobService);
    expect(service).toBeTruthy();
  });
});
