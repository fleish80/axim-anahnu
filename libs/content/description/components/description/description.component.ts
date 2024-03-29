import { Component } from '@angular/core';
import { TranslocoDirective } from '@ngneat/transloco';

@Component({
  selector: 'aa-description',
  standalone: true,
  imports: [TranslocoDirective],
  template: `
    <article class="mat-elevation-z24 content article" *transloco="let t; read 'content'">
      <h2 class="article-title">{{ t('article.title') }}</h2>
      <p class="article-paragraph">{{ t('article.paragraph.0') }}</p>
      <p class="article-paragraph">{{ t('article.paragraph.1') }}</p>
      <p class="article-paragraph">{{ t('article.paragraph.2') }}</p>
      <p class="article-paragraph">{{ t('article.paragraph.3') }}</p>
      <p class="article-paragraph">{{ t('article.paragraph.4') }}</p>
      <p class="article-paragraph">{{ t('article.paragraph.5') }}</p>
      <p class="article-paragraph">{{ t('article.paragraph.6') }}</p>
      <p class="article-paragraph">{{ t('article.paragraph.7') }}</p>
      <ul class="article-paragraph">
        <li>{{ t('article.paragraph.7.list.0') }}</li>
        <li>{{ t('article.paragraph.7.list.1') }}</li>
        <li>{{ t('article.paragraph.7.list.2') }}</li>
      </ul>
      <p class="article-paragraph">{{ t('article.paragraph.8') }}</p>
    </article>
  `,
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent { }
