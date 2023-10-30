import { TestBed } from '@angular/core/testing';

import { TranslocoAttributesService } from './transloco-attributes.service';

describe('TranslocoAttributesService', () => {
  let service: TranslocoAttributesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslocoAttributesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
