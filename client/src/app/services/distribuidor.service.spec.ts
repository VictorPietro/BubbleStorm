import { TestBed, inject } from '@angular/core/testing';

import { DistribuidorService } from './distribuidor.service';

describe('DistribuidorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistribuidorService]
    });
  });

  it('should be created', inject([DistribuidorService], (service: DistribuidorService) => {
    expect(service).toBeTruthy();
  }));
});
