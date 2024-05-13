import { Component } from '@angular/core';
import { TranslocoDirective } from '@ngneat/transloco';
import { ArticleComponent } from '@axim-anahnu/common/article';

@Component({
  selector: 'aa-description',
  standalone: true,
  imports: [TranslocoDirective, ArticleComponent],
  template: `
    <aa-article name="description" [size]="14" class="article mat-elevation-z24" [hasTitle]="true"/>
  `,
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent { }
