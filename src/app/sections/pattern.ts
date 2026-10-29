import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { PATTERN_STEPS } from '../content/story';

/** Closes "When we were divided": the same four steps, every time, and why we keep repeating them. */
@Component({
  selector: 'aa-pattern',
  imports: [TranslocoDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="pattern reveal"
      aria-labelledby="pattern-title"
      *transloco="let t; prefix: 'pattern'"
    >
      <span class="eyebrow">{{ t('eyebrow') }}</span>
      <h3 id="pattern-title">{{ t('title') }}</h3>
      <p class="intro">{{ t('intro') }}</p>
      <ol class="cycle">
        @for (step of steps; track step; let i = $index) {
          <li [class.forgetting]="step === 'forgetting'">
            <span class="step-number" aria-hidden="true">{{ i + 1 }}</span>
            <strong>{{ t('steps.' + step + '.title') }}</strong>
            <span class="step-text">{{ t('steps.' + step + '.text') }}</span>
          </li>
        }
      </ol>
      <p class="again"><span aria-hidden="true">↺</span> {{ t('again') }}</p>
      <p class="tisha-beav">{{ t('tishaBeav') }}</p>
      <figure>
        <blockquote>{{ t('quote') }}</blockquote>
        <figcaption>{{ t('source') }}</figcaption>
      </figure>
      <p class="lesson">{{ t('lesson') }}</p>
    </section>
  `,
  styleUrl: './pattern.scss',
})
export class Pattern {
  protected readonly steps = PATTERN_STEPS;
}
