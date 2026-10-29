import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

/** Served as 404.html for any unknown address, so it speaks both languages at once. */
@Component({
  selector: 'aa-not-found',
  standalone: true,
  imports: [RouterLink, TranslocoPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main id="content" class="not-found">
      <div class="band" aria-hidden="true"></div>
      <div class="messages">
        <section lang="he" dir="rtl">
          <h1>{{ 'notFound.title' | transloco: {} : 'he' }}</h1>
          <p>{{ 'notFound.text' | transloco: {} : 'he' }}</p>
          <a routerLink="/">{{ 'notFound.home' | transloco: {} : 'he' }}</a>
        </section>
        <section lang="en" dir="ltr">
          <h2>{{ 'notFound.title' | transloco: {} : 'en' }}</h2>
          <p>{{ 'notFound.text' | transloco: {} : 'en' }}</p>
          <a routerLink="/en">{{ 'notFound.home' | transloco: {} : 'en' }}</a>
        </section>
      </div>
      <div class="band" aria-hidden="true"></div>
    </main>
  `,
  styles: `
    .not-found {
      display: grid;
      grid-template-rows: auto 1fr auto;
      gap: 3rem;
      min-height: calc(100svh - var(--header-height));
      padding-block: 2rem;
      background: var(--paper);
    }
    .band {
      height: clamp(22px, 4.5vh, 46px);
      background: var(--blue);
    }
    .messages {
      display: grid;
      align-content: center;
      gap: 3rem;
      padding-inline: var(--gutter);
      text-align: center;
    }
    h1,
    h2 {
      font-size: clamp(2rem, 6vw, 3.4rem);
      font-weight: 900;
      color: var(--blue);
    }
    p {
      margin-block: 0.75rem 1.5rem;
      font-size: 1.2rem;
      color: var(--ink-muted);
    }
    a {
      display: inline-block;
      padding: 0.7rem 1.4rem;
      border-radius: 999px;
      font-weight: 500;
      color: var(--white);
      background: var(--blue);
      text-decoration: none;
    }
  `,
})
export class NotFound {}
