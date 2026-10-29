import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { injectLanguage } from '../i18n/language';
import { LANGUAGE_PATHS, SITE_URL } from '../i18n/languages';

@Component({
  selector: 'aa-share-buttons',
  standalone: true,
  imports: [TranslocoDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="share" *transloco="let t; prefix: 'share'">
      <h3>{{ t('title') }}</h3>
      <ul>
        <li>
          <a [href]="links().whatsapp" target="_blank" rel="noopener">{{ t('whatsapp') }}</a>
        </li>
        <li>
          <a [href]="links().telegram" target="_blank" rel="noopener">{{ t('telegram') }}</a>
        </li>
        <li>
          <a [href]="links().facebook" target="_blank" rel="noopener">{{ t('facebook') }}</a>
        </li>
        <li>
          <a [href]="links().x" target="_blank" rel="noopener">{{ t('x') }}</a>
        </li>
        <li>
          <button type="button" (click)="copyLink()">
            {{ copied() ? t('copied') : t('copy') }}
          </button>
        </li>
        @if (canShareNatively()) {
          <li>
            <button type="button" (click)="shareNatively()">{{ t('native') }}</button>
          </li>
        }
      </ul>
      <p class="visually-hidden" aria-live="polite">{{ copied() ? t('copied') : '' }}</p>
    </div>
  `,
  styles: `
    h3 {
      font-size: 1.5rem;
      margin-block-end: 1rem;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.6rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    a,
    button {
      display: inline-block;
      padding: 0.6rem 1.2rem;
      border: 2px solid var(--blue);
      border-radius: 999px;
      font: 500 1rem var(--sans);
      color: var(--blue);
      background: var(--white);
      text-decoration: none;
      cursor: pointer;
      transition:
        background 0.15s,
        color 0.15s;
    }
    a:hover,
    button:hover {
      color: var(--white);
      background: var(--blue);
    }
  `,
})
export class ShareButtons {
  readonly #transloco = inject(TranslocoService);
  readonly #language = injectLanguage();

  protected readonly copied = signal(false);
  protected readonly canShareNatively = signal(false);

  protected readonly links = computed(() => {
    const url = SITE_URL + LANGUAGE_PATHS[this.#language()];
    const message = this.#transloco.translate<string>('share.message', {}, this.#language());
    const encodedUrl = encodeURIComponent(url);
    const encodedMessage = encodeURIComponent(message);
    return {
      url,
      message,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${message} ${url}`)}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedMessage}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      x: `https://x.com/intent/post?url=${encodedUrl}&text=${encodedMessage}`,
    };
  });

  constructor() {
    // Only known in the browser, after hydration, so the prerendered HTML stays the same.
    afterNextRender(() => this.canShareNatively.set(typeof navigator.share === 'function'));
  }

  protected async copyLink(): Promise<void> {
    await navigator.clipboard.writeText(this.links().url);
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2500);
  }

  protected async shareNatively(): Promise<void> {
    const { url, message } = this.links();
    try {
      await navigator.share({ title: message, url });
    } catch {
      // The visitor closed the share sheet.
    }
  }
}
