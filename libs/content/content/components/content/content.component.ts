import { Component } from '@angular/core';
import { DescriptionComponent } from '@axim-anahnu/content/description';
import { HistoryComponent } from '@axim-anahnu/content/history';
import { SourceComponent } from '@axim-anahnu/content/source';

@Component({
  selector: 'aa-content',
  standalone: true,
  template: `
    <aa-description/>
    <aa-history/>
    <aa-source/>
  `,
  imports: [DescriptionComponent, HistoryComponent, SourceComponent]
})
export class ContentComponent {

}
