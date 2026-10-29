import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';

/** Ends where the site began: Abraham choosing to end the quarrel. */
@Component({
  selector: 'aa-closing',
  imports: [TranslocoDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="closing" *transloco="let t; prefix: 'closing'">
      <div class="band" aria-hidden="true"></div>
      <figure class="reveal">
        <blockquote>{{ t('verse') }}</blockquote>
        <figcaption>{{ t('source') }}</figcaption>
      </figure>
      <div class="band" aria-hidden="true"></div>
    </section>
  `,
  styles: `
    .closing {
      display: grid;
      gap: clamp(3rem, 8vw, 5rem);
      padding-block: clamp(2rem, 5vw, 3rem);
      text-align: center;
      background: var(--white);
    }
    .band {
      height: clamp(18px, 3vw, 32px);
      background: var(--blue);
    }
    figure {
      max-width: 52rem;
      margin: 0 auto;
      padding-inline: var(--gutter);
    }
    blockquote {
      margin: 0;
      font-family: var(--serif);
      font-size: clamp(1.9rem, 5.5vw, 3.6rem);
      font-weight: 700;
      line-height: 1.3;
      color: var(--blue);
    }
    figcaption {
      margin-block-start: 1rem;
      font-family: var(--serif);
      color: var(--ink-muted);
    }
  `,
})
export class Closing {}
