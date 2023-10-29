import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Renderer2, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { CURRENT_DIRECTION } from '@axim-anahnu/common/transloco';
import { TRANSLOCO_LANG, TranslocoService } from '@ngneat/transloco';

@Component({
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  selector: 'aa-root',
  template: `

<!-- <section>
  <div class="example-label">Raised</div>
  <div class="example-button-row">
    <button mat-raised-button>Basic</button>
    <button mat-raised-button color="primary">Primary</button>
    <button mat-raised-button color="accent">Accent</button>
    <button mat-raised-button color="warn">Warn</button>
    <button mat-raised-button disabled>Disabled</button>
    <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>
  </div>
</section> -->


  <router-outlet/>`,
  styles: [],
})
export class AppComponent {

  #currentDirection = inject(CURRENT_DIRECTION);
  #translocoService = inject(TranslocoService);
  #renderer = inject(Renderer2);
  #document = inject(DOCUMENT);


  constructor() {
    this.#renderer.setAttribute(this.#document.querySelector('html'), 'dir', this.#currentDirection);
    this.#renderer.setAttribute(this.#document.querySelector('html'), 'lang', this.#translocoService.getActiveLang());
  }

  // #angularFirestore = inject(AngularFirestore);
  // #firestore = inject(Firestore);

  // constructor() {
  //   this.#angularFirestore.collection('he').valueChanges().subscribe((value: any) => console.log('value from firestore', value[0].description));

  //   this.getRobots();
  // }

  // async getRobots() {
  //   // return (
  //    const docs = (await getDocs(query(collection(this.#firestore, 'he')))).docs.map(robots => robots.data());
  //    console.log('docs', docs);
  //  }
}
