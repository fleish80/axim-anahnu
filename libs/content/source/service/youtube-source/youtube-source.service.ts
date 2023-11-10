import { Injectable, inject } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { YoutubeSourceModel } from '../../models/youtube-source.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeSourceService {

  #firestore = inject(Firestore);

  async getYoutubeSources(): Promise<YoutubeSourceModel[]> {
    const docSnap = await getDoc(doc(this.#firestore, 'he', 'fN3RI0eDxKxKxICnf2wF'));
    const data = docSnap.data() as { source: YoutubeSourceModel[] };
    return data.source;
  }
}


