import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { VideoPlayer } from '../../components/video-player';
import { DIVIDED_CHAPTERS, FEATURED_VIDEO_ID, TOGETHER_CHAPTERS } from '../../content/story';
import { Actions } from '../../sections/actions';
import { Bridge } from '../../sections/bridge';
import { Chapter } from '../../sections/chapter';
import { Closing } from '../../sections/closing';
import { Hero } from '../../sections/hero';
import { Lessons } from '../../sections/lessons';
import { Pattern } from '../../sections/pattern';
import { PartHeader } from '../../sections/part-header';

@Component({
  selector: 'aa-home',
  standalone: true,
  imports: [
    TranslocoDirective,
    TranslocoPipe,
    VideoPlayer,
    Hero,
    PartHeader,
    Chapter,
    Pattern,
    Bridge,
    Lessons,
    Actions,
    Closing,
  ],
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
        <aa-pattern />
      </section>

      <aa-bridge />

      <section class="section tone-blue" id="together" aria-labelledby="together-title">
        <aa-part-header part="together" headingId="together-title" />
        @for (chapter of together; track chapter.id; let i = $index) {
          <aa-chapter [chapter]="chapter" [number]="divided.length + i + 1" />
        }
        <div class="video reveal">
          <p class="video-intro">{{ 'video.intro' | transloco }}</p>
          <aa-video-player
            [youtubeId]="videoId"
            [title]="'video.title' | transloco"
            [caption]="'video.caption' | transloco"
            [playLabel]="'video.play' | transloco"
          />
        </div>
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
    .video {
      max-width: 56rem;
      margin: clamp(3rem, 8vw, 5rem) auto 0;
    }
    .video-intro {
      margin-block-end: 1.5rem;
      font-family: var(--serif);
      font-size: clamp(1.5rem, 4vw, 2.2rem);
      font-weight: 700;
      text-align: center;
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
  protected readonly videoId = FEATURED_VIDEO_ID;
}
