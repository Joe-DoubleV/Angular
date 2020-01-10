import { TestBed, inject } from '@angular/core/testing';

import { CommtempService } from './commtemp.service';

describe('CommtempService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommtempService]
    });
  });

  it('should be created', inject([CommtempService], (service: CommtempService) => {
    expect(service).toBeTruthy();
  }));
});
