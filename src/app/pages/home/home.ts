import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { DIVIDED_CHAPTERS, TOGETHER_CHAPTERS } from '../../content/story';
import { Actions } from '../../sections/actions';
import { Bridge } from '../../sections/bridge';
import { Chapter } from '../../sections/chapter';
import { Closing } from '../../sections/closing';
import { Hero } from '../../sections/hero';
import { Lessons } from '../../sections/lessons';
import { PartHeader } from '../../sections/part-header';

@Component({
  selector: 'aa-home',
  imports: [TranslocoDirective, Hero, PartHeader, Chapter, Bridge, Lessons, Actions, Closing],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main id="content">
      <aa-hero />

      <section
        class="section tone-paper"
        id="opening"
        aria-labelledby="opening-title"
        *transloco="let t; prefix: 'opening'"
      >
        <div class="measure opening reveal">
          <h2 id="opening-title">{{ t('title') }}</h2>
          <p>{{ t('text') }}</p>
        </div>
      </section>

      <section class="section tone-ash" id="divided" aria-labelledby="divided-title">
        <aa-part-header part="divided" headingId="divided-title" />
        @for (chapter of divided; track chapter.id; let i = $index) {
          <aa-chapter [chapter]="chapter" [number]="i + 1" />
        }
      </section>

      <aa-bridge />

      <section class="section tone-blue" id="together" aria-labelledby="together-title">
        <aa-part-header part="together" headingId="together-title" />
        @for (chapter of together; track chapter.id; let i = $index) {
          <aa-chapter [chapter]="chapter" [number]="divided.length + i + 1" />
        }
      </section>

      <aa-lessons />
      <aa-actions />
      <aa-closing />
    </main>
  `,
  styles: `
    .opening {
      text-align: center;
    }
    .opening h2 {
      font-size: clamp(2.2rem, 6vw, 3.6rem);
      font-weight: 900;
      color: var(--blue);
      margin-block-end: 1.5rem;
    }
    .opening p {
      font-size: clamp(1.15rem, 2.5vw, 1.4rem);
      line-height: 1.8;
    }
  `,
})
export class Home {
  protected readonly divided = DIVIDED_CHAPTERS;
  protected readonly together = TOGETHER_CHAPTERS;
}
