import { TestBed } from '@angular/core/testing';

import { StorePreferenceService } from './store-preference.service';

describe('StorePreferenceService', () => {
  let service: StorePreferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorePreferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
