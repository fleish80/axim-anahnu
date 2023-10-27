import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection, getDocs, query } from '@angular/fire/firestore';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'aa-root',
  template: `
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
