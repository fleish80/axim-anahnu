import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { BRIDGE_EVENTS } from '../content/story';

/** Persecution from outside: never our fault, and it never asked which kind of Jew you were. */
@Component({
  selector: 'aa-bridge',
  imports: [TranslocoDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="section tone-night"
      aria-labelledby="bridge-title"
      *transloco="let t; prefix: 'bridge'"
    >
      <div class="measure reveal">
        <h2 id="bridge-title">{{ t('title') }}</h2>
        <p class="intro">{{ t('intro') }}</p>
        <ol class="events">
          @for (event of events; track event) {
            <li>
              <span class="year">{{ t('events.' + event + '.year') }}</span>
              <span>{{ t('events.' + event + '.text') }}</span>
            </li>
          }
        </ol>
        <p class="text">{{ t('text') }}</p>
        <p class="lesson">{{ t('lesson') }}</p>
      </div>
    </section>
  `,
  styles: `
    h2 {
      font-size: clamp(2.2rem, 6vw, 3.6rem);
      font-weight: 900;
      text-align: center;
    }
    .intro {
      margin-block: 1rem 2.5rem;
      text-align: center;
      color: var(--text-muted);
      font-size: 1.15rem;
    }
    .events {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      display: grid;
      grid-template-columns: 7.5rem 1fr;
      gap: 1rem;
      align-items: baseline;
      padding-block: 0.9rem;
      border-block-end: 1px solid rgb(255 255 255 / 0.12);
    }
    .year {
      font-family: var(--serif);
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--accent);
    }
    .text {
      margin-block: 2.5rem 1.5rem;
      font-size: clamp(1.15rem, 2.5vw, 1.35rem);
    }
    .lesson {
      font-family: var(--serif);
      font-size: clamp(1.6rem, 4.2vw, 2.4rem);
      font-weight: 700;
      line-height: 1.35;
      color: var(--white);
    }
  `,
})
export class Bridge {
  protected readonly events = BRIDGE_EVENTS;
}
