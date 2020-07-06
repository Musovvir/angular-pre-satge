import { TestBed } from '@angular/core/testing';

import { NewStoreService } from './new-store.service';

describe('NewStoreService', () => {
  let service: NewStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
