import { Component } from '@angular/core';
import { TranslocoDirective } from '@ngneat/transloco';

@Component({
  selector: 'aa-holocaust',
  standalone: true,
  imports: [TranslocoDirective],
  template: ` <article class="mat-elevation-z24 content article" *transloco="let t; read 'content'">
    <h2 class="article-title">{{ t('holocaust.paragraph.0.title') }}</h2>
    <p class="article-paragraph">{{ t('holocaust.paragraph.0.text') }}</p>

    <h2 class="article-title">{{ t('holocaust.paragraph.1.title') }}</h2>


  </article>`,
  styleUrl: './holocaust.component.scss',
})
export class HolocaustComponent {}
