import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { SourceLink } from '../components/source-link';
import { ChapterRef } from '../content/story';

@Component({
  selector: 'aa-chapter',
  standalone: true,
  imports: [TranslocoDirective, TranslocoPipe, SourceLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article
      class="chapter reveal"
      [attr.aria-labelledby]="headingId()"
      *transloco="let t; prefix: 'chapters.' + chapter().id"
    >
      <div class="meta">
        <span class="number" aria-hidden="true">{{ paddedNumber() }}</span>
        <span class="date">{{ t('date') }}</span>
      </div>
      <div class="body">
        <h3 [id]="headingId()">{{ t('title') }}</h3>
        <p class="hook">{{ t('hook') }}</p>
        <p class="story">{{ t('story') }}</p>
        @if (chapter().hasQuote) {
          <figure class="quote">
            <blockquote>
              <p>{{ t('quote') }}</p>
            </blockquote>
            <figcaption>
              <aa-source-link [label]="t('source')" [link]="chapter().sourceLink" />
            </figcaption>
          </figure>
        }
        @if (chapter().hasLight) {
          <aside class="light">
            <strong>{{ 'chapter.light' | transloco }}</strong>
            {{ t('light') }}
          </aside>
        }
        <p class="lesson">
          <span class="lesson-label">{{ 'chapter.lesson' | transloco }}</span>
          {{ t('lesson') }}
        </p>
      </div>
    </article>
  `,
  styleUrl: './chapter.scss',
})
export class Chapter {
  readonly chapter = input.required<ChapterRef>();
  readonly number = input.required<number>();

  protected readonly headingId = computed(() => `chapter-${this.chapter().id}`);
  protected readonly paddedNumber = computed(() => String(this.number()).padStart(2, '0'));
}
