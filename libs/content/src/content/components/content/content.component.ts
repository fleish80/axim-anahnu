import { Component } from '@angular/core';
import { DescriptionComponent } from '@axim-anahnu/content/description';

@Component({
  selector: 'aa-content',
  standalone: true,
  imports: [DescriptionComponent],
  template: `<aa-description/>`,
  styles: [],
})
export class ContentComponent {}
