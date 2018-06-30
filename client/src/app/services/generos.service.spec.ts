import { TestBed, inject } from '@angular/core/testing';

import { GeneroService } from './generos.service';

describe('GeneroServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneroService]
    });
  });

  it('should be created', inject([GeneroService], (service: GeneroService) => {
    expect(service).toBeTruthy();
  }));
});
