import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SecondHouseDestructionComponent } from '../second-house-destruction/second-house-destruction.component';
import { HolocaustComponent } from '../holocaust/holocaust.component';
import { TranslocoDirective } from '@ngneat/transloco';

@Component({
  selector: 'aa-history',
  standalone: true,
  imports: [CommonModule, MatTabsModule, SecondHouseDestructionComponent, HolocaustComponent, TranslocoDirective],
  template: `
    <mat-tab-group color="primary" *transloco="let t; read 'content'">
      <mat-tab [label]="t('second-house-label')">
        @defer (on viewport) {
          <aa-second-house-destruction/>
        } @placeholder {
          <span>Loading...</span>
        }
      </mat-tab>
      <mat-tab [label]="t('holocaust-label')">
        @defer (on viewport) {
          <aa-holocaust/>
        } @placeholder {
          <span>Loading...</span>
        }
      </mat-tab>
    </mat-tab-group>
  `,
  styles: [],
})
export class HistoryComponent {}
