import { Component } from '@angular/core';
import { DescriptionComponent } from '@axim-anahnu/content/description';
import { HistoryComponent } from '@axim-anahnu/content/history';
import { SourceComponent } from '@axim-anahnu/content/source';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'aa-content',
  standalone: true,
  template: `
    <mat-toolbar color="primary">
      <span>בוא נראה את זה פה</span>
    </mat-toolbar>
  <aa-description/>
  <aa-history/>
  <aa-source>
  `,
  styles: [],
  imports: [DescriptionComponent, HistoryComponent, SourceComponent, MatToolbarModule]
})
export class ContentComponent { }
