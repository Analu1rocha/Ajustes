import { TestBed } from '@angular/core/testing';

import { DadosPropService } from './dados-prop.service';

describe('DadosPropService', () => {
  let service: DadosPropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosPropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
