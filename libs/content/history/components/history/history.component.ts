import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslocoDirective } from '@ngneat/transloco';
import { ArticleComponent } from '@axim-anahnu/common/article';

@Component({
  selector: 'aa-history',
  standalone: true,
  imports: [MatTabsModule, TranslocoDirective, ArticleComponent],
  template: `
    <mat-tab-group color="primary" *transloco="let t; read 'content'" class="mat-elevation-z24">
      <mat-tab [label]="t('tab-title.egypt-slavery')">
        @defer (on viewport) {
          <aa-article name="egypt-slavery" [size]="5" />
        } @placeholder {
          <span>Loading...</span>
        }
      </mat-tab>
      <mat-tab [label]="t('tab-title.first-house')">
        @defer (on viewport) {
          <aa-article name="first-house" [size]="9" />
        } @placeholder {
          <span>Loading...</span>
        }
      </mat-tab>

      <mat-tab [label]="t('tab-title.second-house')">
        @defer (on viewport) {
          <aa-article name="second-house" [size]="10" />
        } @placeholder {
          <span>Loading...</span>
        }
      </mat-tab>
      <mat-tab [label]="t('tab-title.crusades')">
        @defer (on viewport) {
          <aa-article name="crusades" [size]="8" />
        } @placeholder {
          <span>Loading...</span>
        }
      </mat-tab>
      <mat-tab [label]="t('tab-title.pogroms')">
        @defer (on viewport) {
          <aa-article name="pogroms" [size]="5" />
        } @placeholder {
          <span>Loading...</span>
        }
      </mat-tab>
      <mat-tab [label]="t('tab-title.holocaust')">
        @defer (on viewport) {
          <aa-article name="holocaust" [size]="12" />
        } @placeholder {
          <span>Loading...</span>
        }
      </mat-tab>
      <mat-tab [label]="t('tab-title.october-seven')">
        @defer (on viewport) {
          <aa-article name="october-seven" [size]="9" />
        } @placeholder {
          <span>Loading...</span>
        }
      </mat-tab>
    </mat-tab-group>
  `,
  styles: `
    .mat-mdc-tab-group {
      border-radius: 10px;
      box-sizing: border-box;
      margin: 20px;
      padding-inline: 20px;
      padding-block-end: 20px;
    }

  `,
})
export class HistoryComponent {}
