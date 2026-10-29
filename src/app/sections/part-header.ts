import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';

/** Eyebrow, title and one-line intro that open each part of the story. */
@Component({
  selector: 'aa-part-header',
  imports: [TranslocoDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="part-header measure" *transloco="let t; prefix: 'parts.' + part()">
      <span class="eyebrow">{{ t('eyebrow') }}</span>
      <h2 [id]="headingId()">{{ t('title') }}</h2>
      <p>{{ t('intro') }}</p>
    </header>
  `,
  styles: `
    .part-header {
      margin-block-end: clamp(3rem, 8vw, 5rem);
      text-align: center;
    }
    h2 {
      margin-block: 0.4rem 1rem;
      font-size: clamp(2.2rem, 6vw, 3.8rem);
      font-weight: 900;
    }
    p {
      font-size: clamp(1.1rem, 2.4vw, 1.35rem);
      color: var(--text-muted);
    }
  `,
})
export class PartHeader {
  readonly part = input.required<'divided' | 'together' | 'lesson' | 'act'>();
  readonly headingId = input.required<string>();
}
