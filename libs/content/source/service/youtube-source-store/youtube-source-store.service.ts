import { Injectable } from '@angular/core';
import { YoutubeSourceModel } from '../../models/youtube-source.model';
import { signalStore, withState, withCallState } from '@axim-anahnu/common/ngrx-signals-store';

@Injectable({
  providedIn: 'root'
})
export class YoutubeSourceStoreService extends signalStore(
  withState<{ sources: YoutubeSourceModel[] }>({ sources: [] },
    withCallState()
  )) {


  constructor() {

  }

}
