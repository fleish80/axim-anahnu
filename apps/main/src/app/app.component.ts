import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  selector: 'aa-root',
  template: `
  <router-outlet/>
  `,
})
export class AppComponent {


}
