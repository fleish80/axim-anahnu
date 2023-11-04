import { Injectable, inject } from '@angular/core';
import { Firestore, doc, getDoc } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  #firestore = inject(Firestore);

  constructor() {
    this.getInfo();


  }

  async getInfo() {
      try {
        const docSnap = await getDoc(doc(this.#firestore, 'he', 'fN3RI0eDxKxKxICnf2wF'));
        const singleDoc = docSnap.data();
        console.log('singleDoc', singleDoc);
      } catch (error) {
        console.error(error);
      }
     }



    // const docs = (await getDocs(query(collection(this.#firestore, 'he')))).docs.map(robots => robots.data());
    // console.log('docs', docs);
  // }
}


// #currentDirection = inject(CURRENT_DIRECTION);
// #renderer = inject(Renderer2);
// #document = inject(DOCUMENT);


// constructor() {
//   this.#renderer.setAttribute(this.#document.body, 'dir', this.#currentDirection);
// }

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

