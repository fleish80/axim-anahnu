import { Injectable, inject } from '@angular/core';
import { rxMethod, setLoaded, setLoading, signalStore, withCallState, withHooks, withMethods, withState } from '@axim-anahnu/common/ngrx-signals-store';
import { pipe, switchMap, tap } from 'rxjs';
import { YoutubeSourceModel } from '../../models/youtube-source.model';
import { YoutubeSourceService } from '../youtube-source/youtube-source.service';

type State = {
  youtubeSorces: YoutubeSourceModel[];
}

@Injectable({
  providedIn: 'root'
})
export class YoutubeSourceStoreService extends signalStore(
  withState<State>({ youtubeSorces: [] }),
  withCallState(),
  withMethods((store, youtubeSourceService = inject(YoutubeSourceService)) => ({
    load: rxMethod<void>(
      pipe(
        tap(() => store.$update(setLoading())),
        switchMap(() => youtubeSourceService.getYoutubeSources()),
        tap((youtubeSorces) => store.$update({ youtubeSorces }, setLoaded()))
      )
    )
  })),
  withHooks({
    onInit({ load }) {
      load();
    },
  })
) {


}
