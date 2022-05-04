import { TestBed } from '@angular/core/testing';

import { CountyNameServiceService } from './county-name-service.service';

describe('CountyNameServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountyNameServiceService = TestBed.get(CountyNameServiceService);
    expect(service).toBeTruthy();
  });
});
