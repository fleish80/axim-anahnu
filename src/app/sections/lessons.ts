import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { LESSONS } from '../content/story';
import { PartHeader } from './part-header';

@Component({
  selector: 'aa-lessons',
  imports: [TranslocoDirective, PartHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section tone-white" aria-labelledby="lesson-title">
      <aa-part-header part="lesson" headingId="lesson-title" />
      <div class="cards" *transloco="let t; prefix: 'lessons'">
        @for (lesson of lessons; track lesson) {
          <article class="card reveal" [attr.aria-labelledby]="'lesson-' + lesson">
            <h3 [id]="'lesson-' + lesson">{{ t(lesson + '.title') }}</h3>
            <p>{{ t(lesson + '.text') }}</p>
            <figure>
              <blockquote>{{ t(lesson + '.quote') }}</blockquote>
              <figcaption>{{ t(lesson + '.source') }}</figcaption>
            </figure>
          </article>
        }
      </div>
    </section>
  `,
  styles: `
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
      gap: 1.5rem;
      max-width: 72rem;
      margin-inline: auto;
    }
    .card {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem 1.75rem;
      border-block-start: 8px solid var(--blue);
      border-radius: 0.25rem 0.25rem 1rem 1rem;
      background: var(--white);
      box-shadow: 0 18px 40px rgb(20 33 61 / 0.1);
    }
    h3 {
      font-size: 1.7rem;
      color: var(--blue);
    }
    figure {
      margin: auto 0 0;
      padding-block-start: 1rem;
      border-block-start: 1px solid #e5e1d8;
    }
    blockquote {
      margin: 0;
      font-family: var(--serif);
      font-size: 1.2rem;
      line-height: 1.5;
    }
    figcaption {
      margin-block-start: 0.4rem;
      font-size: 0.85rem;
      color: var(--text-muted);
    }
  `,
})
export class Lessons {
  protected readonly lessons = LESSONS;
}
