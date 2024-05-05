import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TranslocoDirective } from '@ngneat/transloco';

@Component({
  selector: 'axim-anahnu-article',
  standalone: true,
  imports: [
    TranslocoDirective
  ],
  template: `
  <article *transloco="let t; read 'content'">
    @for (index of sizeArr(); track index) {
      <p class="article-paragraph">{{ t('text.' + index) }}</p>
    }
  </article>

  `,
  styleUrl: './article.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {

  name = input.required<string>();
  size = input.required<number>();

  sizeArr = computed(() => {
    const arr: number[] = []
    for (let i = 0; i < this.size(); i++) {
      arr.push(i);
    }
    return arr;
  })

}
