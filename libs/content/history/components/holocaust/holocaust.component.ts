 import { Component } from '@angular/core';
import { TranslocoDirective } from '@ngneat/transloco';

@Component({
  selector: 'aa-holocaust',
  standalone: true,
  imports: [TranslocoDirective],
  template: ` <article class="content article" *transloco="let t; read 'content'">
    <h2 class="article-title">{{ t('holocaust.paragraph.0.title') }}</h2>
    <p class="article-paragraph">{{ t('holocaust.paragraph.0.text') }}</p>

    <h2 class="article-title">{{ t('holocaust.paragraph.1.title') }}</h2>

    <ul class="article-paragraph">
      @for (index of [0, 1, 2, 3]; track index) {
        <li>
          <strong>{{ t('holocaust.paragraph.1.list.' + index + '.title') }}</strong>&nbsp;
          <span>{{ t('holocaust.paragraph.1.list.' + index + '.text') }}</span>
        </li>
      }
    </ul>

    <h2 class="article-title">{{ t('holocaust.paragraph.2.title') }}</h2>

    <ul class="article-paragraph">
      @for (index of [0, 1, 2]; track index) {
        <li>
          <strong>{{ t('holocaust.paragraph.2.list.' + index + '.title') }}</strong>&nbsp;
          <span>{{ t('holocaust.paragraph.2.list.' + index + '.text') }}</span>
        </li>
      }
    </ul>

    <h2 class="article-title">{{ t('holocaust.paragraph.3.title') }}</h2>

    <ul class="article-paragraph">
      @for (index of [0, 1, 2]; track index) {
        <li>
          <strong>{{ t('holocaust.paragraph.3.list.' + index + '.title') }}</strong>&nbsp;
          <span>{{ t('holocaust.paragraph.3.list.' + index + '.text') }}</span>
        </li>
      }
    </ul>

    <h2 class="article-title">{{ t('holocaust.paragraph.4.title') }}</h2>
    <p class="article-paragraph">{{ t('holocaust.paragraph.4.text') }}</p>


  </article>`,
  styleUrl: './holocaust.component.scss',
})
export class HolocaustComponent {}
