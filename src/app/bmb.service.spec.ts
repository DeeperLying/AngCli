import { TestBed, inject } from '@angular/core/testing';

import { BmbService } from './bmb.service';

describe('BmbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BmbService]
    });
  });

  it('should be created', inject([BmbService], (service: BmbService) => {
    expect(service).toBeTruthy();
  }));
});
