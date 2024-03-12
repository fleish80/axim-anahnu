import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SecondHouseDestructionComponent } from '../second-house-destruction/second-house-destruction.component';
import { HolocaustComponent } from '../holocaust/holocaust.component';

@Component({
  selector: 'aa-history',
  standalone: true,
  imports: [CommonModule, MatTabsModule, SecondHouseDestructionComponent, HolocaustComponent],
  template: `

    <mat-tab-group color="primary">
      <mat-tab label="חורבן בית שני">
        @defer (on viewport) {
          <aa-second-house-destruction/>
        } @placeholder {
          <span>Loading...</span>
        }
      </mat-tab>
      <mat-tab label="שואה">
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
