import { TestBed } from '@angular/core/testing';

import { YoutubeSourceStoreService } from './youtube-source-store.service';

describe('YoutubeSourceStoreService', () => {
  let service: YoutubeSourceStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeSourceStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
