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

  it('should give each language its own share image', async () => {
    const image = () =>
      document.head.querySelector('meta[property="og:image"]')?.getAttribute('content');

    await harness.navigateByUrl('/');
    expect(image()).toBe('https://axim-anahnu.web.app/og/he.jpg');

    await harness.navigateByUrl('/en');
    expect(image()).toBe('https://axim-anahnu.web.app/og/en.jpg');
    expect(
      document.head.querySelector('meta[property="og:image:width"]')?.getAttribute('content'),
    ).toBe('1200');
  });

  it('should link every page to both languages and mark Hebrew as the default', async () => {
    await harness.navigateByUrl('/en');

    expect(link('link[hreflang="he"]')).toBe('https://axim-anahnu.web.app/');
    expect(link('link[hreflang="en"]')).toBe('https://axim-anahnu.web.app/en');
    expect(link('link[hreflang="x-default"]')).toBe('https://axim-anahnu.web.app/');
  });

  it('should show the bilingual not-found page for unknown paths, kept out of search results', async () => {
    await harness.navigateByUrl('/no-such-page');

    expect(TestBed.inject(Router).url).toBe('/no-such-page');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe('הדף הזה לא נמצא');
    expect(harness.routeNativeElement?.querySelector('h2')?.textContent).toBe(
      "This page wasn't found",
    );
    expect(document.head.querySelector('meta[name="robots"]')?.getAttribute('content')).toBe(
      'noindex',
    );
    expect(link('link[rel="canonical"]')).toBeNull();
  });

  it('should make a page indexable again after leaving the not-found page', async () => {
    await harness.navigateByUrl('/no-such-page');
    await harness.navigateByUrl('/en');

    expect(document.head.querySelector('meta[name="robots"]')).toBeNull();
    expect(link('link[rel="canonical"]')).toBe('https://axim-anahnu.web.app/en');
  });
});
