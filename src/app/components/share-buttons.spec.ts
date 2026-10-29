import { TestBed } from '@angular/core/testing';
import { TranslocoService } from '@jsverse/transloco';
import { firstValueFrom } from 'rxjs';
import { provideI18n } from '../i18n/provide-i18n';
import { ShareButtons } from './share-buttons';

describe('ShareButtons', () => {
  async function render(lang: 'he' | 'en'): Promise<HTMLElement> {
    TestBed.configureTestingModule({ providers: [provideI18n()] });
    const transloco = TestBed.inject(TranslocoService);
    await firstValueFrom(transloco.load(lang));
    transloco.setActiveLang(lang);
    const fixture = TestBed.createComponent(ShareButtons);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  function href(element: HTMLElement, host: string): URL {
    const link = [...element.querySelectorAll('a')].find((anchor) => anchor.href.includes(host));
    return new URL(link?.href ?? '');
  }

  it('should share the Hebrew home page from the Hebrew site', async () => {
    const element = await render('he');

    expect(href(element, 'facebook.com').searchParams.get('u')).toBe(
      'https://axim-anahnu.web.app/',
    );
    expect(href(element, 'wa.me').searchParams.get('text')).toContain('אחים אנחנו');
  });

  it('should share the English page, with the English message, from the English site', async () => {
    const element = await render('en');

    expect(href(element, 'x.com').searchParams.get('url')).toBe('https://axim-anahnu.web.app/en');
    expect(href(element, 'x.com').searchParams.get('text')).toContain('divided, we fall');
    expect(href(element, 't.me').searchParams.get('url')).toBe('https://axim-anahnu.web.app/en');
  });

  it('should copy the link and confirm it', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
    const element = await render('en');
    const copy = [...element.querySelectorAll('button')].find((button) =>
      button.textContent?.includes('Copy link'),
    );

    copy?.click();
    await vi.waitFor(() => expect(copy?.textContent?.trim()).toBe('Link copied'));

    expect(writeText).toHaveBeenCalledWith('https://axim-anahnu.web.app/en');
  });
});
