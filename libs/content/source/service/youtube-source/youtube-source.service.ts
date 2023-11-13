import { Injectable, inject } from '@angular/core';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { YoutubeSourceModel } from '../../models/youtube-source.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeSourceService {

  #firestore = inject(Firestore);
  
  getYoutubeSources(): Observable<YoutubeSourceModel[]> {
    const itemCollection = doc(this.#firestore, 'he', 'fN3RI0eDxKxKxICnf2wF');
    return docData(itemCollection).pipe(map((doc) => doc?.['sources']));
  }
}


