import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { ShareButtons } from '../components/share-buttons';
import { ACTIONS } from '../content/story';
import { PartHeader } from './part-header';

@Component({
  selector: 'aa-actions',
  standalone: true,
  imports: [TranslocoDirective, PartHeader, ShareButtons],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section tone-paper" id="act" aria-labelledby="act-title">
      <aa-part-header part="act" headingId="act-title" />
      <ol class="steps" *transloco="let t; prefix: 'actions'">
        @for (action of actions; track action; let i = $index) {
          <li class="reveal">
            <span class="step-number" aria-hidden="true">{{ i + 1 }}</span>
            <h3>{{ t(action + '.title') }}</h3>
            <p>{{ t(action + '.text') }}</p>
          </li>
        }
      </ol>
      <aa-share-buttons class="share" />
    </section>
  `,
  styles: `
    .steps {
      display: grid;
      gap: 2rem;
      @media (min-width: 40rem) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 68rem) {
        grid-template-columns: repeat(4, 1fr);
      }
      max-width: 72rem;
      margin: 0 auto;
      padding: 0;
      list-style: none;
    }
    li {
      position: relative;
      padding-block-start: 3.75rem;
    }
    .step-number {
      position: absolute;
      inset-block-start: 0;
      inset-inline-start: 0;
      display: grid;
      place-items: center;
      width: 2.75rem;
      height: 2.75rem;
      border-radius: 50%;
      font: 700 1.25rem var(--serif);
      color: var(--white);
      background: var(--blue);
    }
    h3 {
      font-size: 1.45rem;
      margin-block-end: 0.5rem;
    }
    p {
      color: var(--text-muted);
    }
    .share {
      display: block;
      margin-block-start: clamp(3rem, 8vw, 5rem);
      text-align: center;
    }
  `,
})
export class Actions {
  protected readonly actions = ACTIONS;
}
