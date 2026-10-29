import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { App } from './app';
import { routes } from './app.routes';
import { provideI18n } from './i18n/provide-i18n';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes), provideI18n()] });
  });

  async function renderAt(url: string): Promise<HTMLAnchorElement> {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl(url);
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return (fixture.nativeElement as HTMLElement).querySelector(
      '.language-switch',
    ) as HTMLAnchorElement;
  }

  it('should offer English from the Hebrew page', async () => {
    const languageSwitch = await renderAt('/');

    expect(languageSwitch.textContent?.trim()).toBe('English');
    expect(languageSwitch.getAttribute('href')).toBe('/en');
    expect(languageSwitch.getAttribute('lang')).toBe('en');
  });

  it('should offer Hebrew from the English page', async () => {
    const languageSwitch = await renderAt('/en');

    expect(languageSwitch.textContent?.trim()).toBe('עברית');
    expect(languageSwitch.getAttribute('href')).toBe('/');
    expect(languageSwitch.getAttribute('lang')).toBe('he');
  });
});
