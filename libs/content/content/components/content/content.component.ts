import { Component, inject } from '@angular/core';
import { DescriptionComponent } from '@axim-anahnu/content/description';
import { HistoryComponent } from '@axim-anahnu/content/history';
import { SourceComponent } from '@axim-anahnu/content/source';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoModule } from '@ngneat/transloco';
import { ContentService } from '../../service/content/content.service';

@Component({
  selector: 'aa-content',
  standalone: true,
  template: `
  <ng-container *transloco="let t; read 'content'">
    <mat-toolbar color="primary">
      <div class="toolbar-buttons">
        <button class="toolbar-button" mat-flat-button color="primary">{{t('description')}}</button>
        <button class="toolbar-button"mat-flat-button color="primary">{{t('history')}}</button>
        <button class="toolbar-button" mat-flat-button color="primary">{{t('information')}}</button>
      </div>
    </mat-toolbar>
    <aa-description/>
    <aa-history/>
    <aa-source/>
  </ng-container>
  `,
  styles: [
    `
      .toolbar-button {
        font-size: 30px;
      }
    `
  ],
  imports: [DescriptionComponent, HistoryComponent, SourceComponent, MatToolbarModule, MatButtonModule, TranslocoModule]
})
export class ContentComponent { 

  #content = inject(ContentService)

}
