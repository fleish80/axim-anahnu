import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'aa-description',
  standalone: true,
  imports: [TranslocoModule],
  template: `
    <ng-container *transloco="let t; read 'content'">
      {{t('hello')}}
    </ng-container>
  `,
  styles: [],
})
export class DescriptionComponent {}
