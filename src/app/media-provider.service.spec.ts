import { TestBed } from '@angular/core/testing';

import { MediaProviderService } from './media-provider.service';

describe('MediaProviderService', () => {
  let service: MediaProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
