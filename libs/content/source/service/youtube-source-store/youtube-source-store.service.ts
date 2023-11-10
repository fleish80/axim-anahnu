import { Injectable } from '@angular/core';
import { YoutubeSourceModel } from '../../models/youtube-source.model';
import { signalStore, withState } from '@axim-anahnu/common/ngrx-signals-store';

@Injectable({
  providedIn: 'root'
})
export class YoutubeSourceStoreService extends signalStore(withState({
  youtubeSources: [] as YoutubeSourceModel[]
})) {
}
