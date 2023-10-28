import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection, getDocs, query } from '@angular/fire/firestore';
import {MatButtonModule} from '@angular/material/button';

@Component({
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  selector: 'aa-root',
  template: `

<section>
  <div class="example-label">Raised</div>
  <div class="example-button-row">
    <button mat-raised-button>Basic</button>
    <button mat-raised-button color="primary">Primary</button>
    <button mat-raised-button color="accent">Accent</button>
    <button mat-raised-button color="warn">Warn</button>
    <button mat-raised-button disabled>Disabled</button>
    <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>
  </div>
</section>


  <router-outlet/>`,
  styles: [],
})
export class AppComponent {

  #angularFirestore = inject(AngularFirestore);
  #firestore = inject(Firestore);

  constructor() {
    this.#angularFirestore.collection('he').valueChanges().subscribe((value: any) => console.log('value from firestore', value[0].description));

    this.getRobots();
  }

  async getRobots() {
    // return (
     const docs = (await getDocs(query(collection(this.#firestore, 'he')))).docs.map(robots => robots.data());
     console.log('docs', docs);
   }
}
