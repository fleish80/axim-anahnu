import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'axim-anahnu-article',
  standalone: true,
  imports: [CommonModule],
  template: `<p>article works!</p>`,
  styleUrl: './article.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {}
