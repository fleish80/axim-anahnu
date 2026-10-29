import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { provideI18n } from './i18n/provide-i18n';

describe('language routes', () => {
  let harness: RouterTestingHarness;
  let document: Document;

  beforeEach(async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes), provideI18n()] });
    harness = await RouterTestingHarness.create();
    document = TestBed.inject(DOCUMENT);
  });

  function link(selector: string): string | null {
    return document.head.querySelector(selector)?.getAttribute('href') ?? null;
  }

  it('should serve Hebrew, right to left, at the root', async () => {
    await harness.navigateByUrl('/');

    expect(document.documentElement.getAttribute('lang')).toBe('he');
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');
    expect(TestBed.inject(Title).getTitle()).toContain('אחים אנחנו');
    expect(harness.routeNativeElement?.querySelector('h2')?.textContent).toBe('כבר היינו כאן');
    expect(link('link[rel="canonical"]')).toBe('https://axim-anahnu.web.app/');
  });

  it('should serve English, left to right, at /en', async () => {
    await harness.navigateByUrl('/en');

    expect(document.documentElement.getAttribute('lang')).toBe('en');
    expect(document.documentElement.getAttribute('dir')).toBe('ltr');
    expect(TestBed.inject(Title).getTitle()).toContain('We Are Brothers');
    expect(harness.routeNativeElement?.querySelector('h2')?.textContent).toBe(
      'We have been here before',
    );
    expect(link('link[rel="canonical"]')).toBe('https://axim-anahnu.web.app/en');
  });

  it('should link every page to both languages and mark Hebrew as the default', async () => {
    await harness.navigateByUrl('/en');

    expect(link('link[hreflang="he"]')).toBe('https://axim-anahnu.web.app/');
    expect(link('link[hreflang="en"]')).toBe('https://axim-anahnu.web.app/en');
    expect(link('link[hreflang="x-default"]')).toBe('https://axim-anahnu.web.app/');
  });

  it('should send unknown paths to the Hebrew home page', async () => {
    await harness.navigateByUrl('/no-such-page');

    expect(TestBed.inject(Router).url).toBe('/');
  });
});
