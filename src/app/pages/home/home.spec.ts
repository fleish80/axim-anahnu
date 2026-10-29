import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../../app.routes';
import { provideI18n } from '../../i18n/provide-i18n';

describe('Home', () => {
  let page: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes), provideI18n()] });
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/en');
    page = harness.routeNativeElement as HTMLElement;
  });

  function texts(selector: string): string[] {
    return [...page.querySelectorAll(selector)].map((element) => element.textContent?.trim() ?? '');
  }

  it('should open with the verse the site is named after', () => {
    expect(page.querySelector('h1')?.textContent).toBe('For we are brothers.');
  });

  it('should tell the story in four parts, in order', () => {
    expect(texts('h2')).toEqual([
      'We have been here before',
      'When we were divided',
      'They never asked',
      'When we stood together',
      'The lesson',
      'What you can do',
    ]);
  });

  it('should number all eleven chapters across both parts', () => {
    expect(texts('aa-chapter .number')).toEqual([
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
    ]);
    expect(page.querySelectorAll('#divided aa-chapter')).toHaveLength(7);
    expect(page.querySelectorAll('#together aa-chapter')).toHaveLength(4);
  });

  it('should show a cited quote only for chapters that have one', () => {
    const altalena = page.querySelector('[aria-labelledby="chapter-altalena"]');
    const temple = page.querySelector('[aria-labelledby="chapter-temple"]');

    expect(altalena?.querySelector('blockquote')).toBeNull();
    expect(temple?.querySelector('figcaption')?.textContent).toBe('Babylonian Talmud, Yoma 9b');
  });

  it('should list the outside persecutions, the three lessons and the four actions', () => {
    expect(page.querySelectorAll('aa-bridge li')).toHaveLength(4);
    expect(texts('aa-lessons h3')).toEqual([
      'Argue without hating',
      'Responsible for one another',
      'Baseless love',
    ]);
    expect(page.querySelectorAll('aa-actions li.reveal')).toHaveLength(4);
  });
});
