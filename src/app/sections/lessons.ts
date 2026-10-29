import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { SourceLink } from '../components/source-link';
import { LESSON_GROUPS } from '../content/story';
import { PartHeader } from './part-header';

@Component({
  selector: 'aa-lessons',
  standalone: true,
  imports: [TranslocoDirective, PartHeader, SourceLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section tone-white" aria-labelledby="lesson-title">
      <aa-part-header part="lesson" headingId="lesson-title" />
      <ng-container *transloco="let t; prefix: 'lessons'">
        @for (group of groups; track group.id) {
          <div class="group" [attr.aria-labelledby]="'lessons-' + group.id" role="group">
            <h3 class="group-title" [id]="'lessons-' + group.id">{{ t('groups.' + group.id) }}</h3>
            <div class="cards">
              @for (lesson of group.lessons; track lesson.id) {
                <article class="card reveal" [attr.aria-labelledby]="'lesson-' + lesson.id">
                  <h4 [id]="'lesson-' + lesson.id">{{ t(lesson.id + '.title') }}</h4>
                  <p>{{ t(lesson.id + '.text') }}</p>
                  <figure>
                    @if (lesson.kind === 'quote') {
                      <blockquote>{{ t(lesson.id + '.quote') }}</blockquote>
                    } @else {
                      <p class="fact">
                        @for (part of factParts(t(lesson.id + '.fact')); track $index) {
                          <span class="fact-part">{{ part }}</span>
                        }
                      </p>
                    }
                    <figcaption>
                      <aa-source-link
                        [label]="t(lesson.id + '.source')"
                        [link]="lesson.sourceLink"
                      />
                    </figcaption>
                  </figure>
                </article>
              }
            </div>
          </div>
        }
      </ng-container>
    </section>
  `,
  styleUrl: './lessons.scss',
})
export class Lessons {
  protected readonly groups = LESSON_GROUPS;

  /** "38% secular · 15% national-religious · …" wraps between groups, never inside one. */
  protected factParts(fact: string): string[] {
    return fact.split(' · ');
  }
}
