import { TestBed } from '@angular/core/testing';

import { PublicService } from './public.service';

describe('PublicServiceService', () => {
  let service: PublicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
