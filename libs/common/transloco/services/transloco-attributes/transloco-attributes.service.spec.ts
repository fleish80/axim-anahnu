import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { TranslocoService, TranslocoTestingModule } from '@ngneat/transloco';
import { DIRECTION_MAP } from '../../injection-tokens/direction-map.token';
import { TranslocoAttributesService } from './transloco-attributes.service';

describe('TranslocoAttributesService', () => {
  let service: TranslocoAttributesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslocoTestingModule.forRoot({
          langs: { he: {}, en: {} },
          translocoConfig: { availableLangs: ['he', 'en'], defaultLang: 'he' },
        }),
      ],
      providers: [{ provide: DIRECTION_MAP, useValue: { he: 'rtl', en: 'ltr' } }],
    });
    service = TestBed.inject(TranslocoAttributesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set lang and dir on <html> for the active language', () => {
    const html = TestBed.inject(DOCUMENT).documentElement;
    service.init();
    TestBed.flushEffects();
    expect(html.getAttribute('lang')).toBe('he');
    expect(html.getAttribute('dir')).toBe('rtl');

    TestBed.inject(TranslocoService).setActiveLang('en');
    TestBed.flushEffects();
    expect(html.getAttribute('lang')).toBe('en');
    expect(html.getAttribute('dir')).toBe('ltr');
  });
});
