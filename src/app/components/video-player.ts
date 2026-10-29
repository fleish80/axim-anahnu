import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const YOUTUBE_ID = /^[\w-]{11}$/;

/**
 * Shows the video's thumbnail and loads the YouTube player only when the visitor presses play,
 * so the page stays light and nothing from YouTube is loaded or tracked before that.
 */
@Component({
  selector: 'aa-video-player',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure>
      <div class="frame">
        @if (playing()) {
          <iframe
            [src]="embedUrl()"
            [title]="title()"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowfullscreen
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        } @else {
          <button
            type="button"
            class="poster"
            (click)="playing.set(true)"
            [attr.aria-label]="playLabel()"
          >
            <img
              [src]="thumbnailUrl()"
              alt=""
              width="1280"
              height="720"
              loading="lazy"
              decoding="async"
            />
            <span class="play" aria-hidden="true"></span>
          </button>
        }
      </div>
      <figcaption>{{ caption() }}</figcaption>
    </figure>
  `,
  styles: `
    figure {
      margin: 0;
    }
    .frame {
      position: relative;
      aspect-ratio: 16 / 9;
      overflow: hidden;
      border-radius: 1rem;
      background: var(--blue-night);
      box-shadow: 0 30px 60px rgb(0 18 61 / 0.45);
    }
    iframe,
    .poster,
    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
    .poster {
      padding: 0;
      cursor: pointer;
      background: none;
    }
    img {
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .poster:hover img {
      transform: scale(1.03);
    }
    .play {
      position: absolute;
      inset: 0;
      margin: auto;
      width: clamp(4rem, 12vw, 5.5rem);
      height: clamp(4rem, 12vw, 5.5rem);
      border-radius: 50%;
      background: var(--blue);
      box-shadow: 0 0 0 0.4rem rgb(255 255 255 / 0.85);
      transition: transform 0.2s ease;
    }
    /* The play triangle points right in both languages. */
    .play::after {
      content: '';
      position: absolute;
      inset-block-start: 50%;
      left: 54%;
      transform: translate(-50%, -50%);
      border-block: 0.85rem solid transparent;
      border-left: 1.4rem solid var(--white);
    }
    .poster:hover .play,
    .poster:focus-visible .play {
      transform: scale(1.08);
    }
    figcaption {
      margin-block-start: 0.9rem;
      font-size: 0.95rem;
      text-align: center;
      color: var(--text-muted);
    }
  `,
})
export class VideoPlayer {
  readonly #sanitizer = inject(DomSanitizer);

  readonly youtubeId = input.required<string>();
  readonly title = input.required<string>();
  readonly caption = input.required<string>();
  readonly playLabel = input.required<string>();

  protected readonly playing = signal(false);

  readonly #id = computed(() => {
    const id = this.youtubeId();
    if (!YOUTUBE_ID.test(id)) {
      throw new Error(`Not a YouTube video id: ${id}`);
    }
    return id;
  });

  protected readonly thumbnailUrl = computed(
    () => `https://i.ytimg.com/vi/${this.#id()}/maxresdefault.jpg`,
  );

  // Safe to trust: a fixed embed URL built from an id that matched YOUTUBE_ID.
  protected readonly embedUrl = computed(() =>
    this.#sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${this.#id()}?autoplay=1&rel=0`,
    ),
  );
}
