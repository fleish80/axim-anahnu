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
  #apiLoaded = false;

  constructor() {
    this.#youtubeIframeLoaded();
  }
  
  getYoutubeSources(): Observable<YoutubeSourceModel[]> {
    const itemCollection = doc(this.#firestore, 'he', 'fN3RI0eDxKxKxICnf2wF');
    return docData(itemCollection).pipe(map((doc) => doc?.['sources']));
  }

  #youtubeIframeLoaded() {
    if (!this.#apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.#apiLoaded = true;
    }
  }
}


