import { Component } from '@angular/core';
import { TranslocoDirective } from '@ngneat/transloco';

@Component({
  selector: 'aa-second-house-destruction',
  standalone: true,
  imports: [TranslocoDirective],
  template: `
    <article class="content article" *transloco="let t; read 'content'">
      @for (index of [0, 1, 2, 3, 4, 5, 6]; track index) {
        <h2 class="article-title">{{ t('second-house.paragraph.' + index + '.title') }}</h2>
        <span class="article-paragraph">{{ t('second-house.paragraph.' + index + '.text') }}</span>
      }
    </article>
  `,
  styleUrl: `./second-house-destruction.component.scss`,
})
export class SecondHouseDestructionComponent {}
