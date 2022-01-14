import { TestBed } from '@angular/core/testing';

import { MapNameServiceService } from './map-name-service.service';

describe('MapNameServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapNameServiceService = TestBed.get(MapNameServiceService);
    expect(service).toBeTruthy();
  });
});
