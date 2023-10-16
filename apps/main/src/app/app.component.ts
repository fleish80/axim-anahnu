import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DescriptionComponent} from '@axim-anahnu/content/description';

@Component({
  standalone: true,
  imports: [RouterOutlet, DescriptionComponent],
  selector: 'aa-root',
  template: `
  <aa-description/>
  <router-outlet/>`,
  styles: [],
})
export class AppComponent {
  title = 'main';
}
