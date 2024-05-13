import { inject } from '@angular/core';
import { pipe, switchMap, tap } from 'rxjs';
import { YoutubeSourceModel } from '../../models/youtube-source.model';
import { YoutubeSourceService } from '../youtube-source/youtube-source.service';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { setLoaded, setLoading, withCallState } from '@axim-anahnu/common/signal-store-features';

type State = {
  youtubeSources: YoutubeSourceModel[];
  currentPlayerId: string;
}


export const YoutubeSourceStore = signalStore(
  withState<State>(
    {
      youtubeSources: [],
      currentPlayerId: ''
    }),
  withCallState(),
  withMethods((store,
               youtubeSourceService = inject(YoutubeSourceService)) => ({
    load: rxMethod<void>(
      pipe(
        tap(() => patchState(store, setLoading())),
        switchMap(() => youtubeSourceService.getYoutubeSources()),
        tap((youtubeSources) => patchState(store, { youtubeSources }, setLoaded()))
      )
    ),
    setPlayer: (playerId: string) => patchState(store, { currentPlayerId: playerId })
  })),
  withHooks({
    onInit({ load }) {
      load();
    }
  })
);
