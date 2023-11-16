import { Injectable, inject } from '@angular/core';
import { rxMethod, setLoaded, setLoading, signalStore, withCallState, withHooks, withMethods, withState } from '@axim-anahnu/common/ngrx-signals-store';
import { pipe, switchMap, tap } from 'rxjs';
import { YoutubeSourceModel } from '../../models/youtube-source.model';
import { YoutubeSourceService } from '../youtube-source/youtube-source.service';

type State = {
  youtubeSorces: YoutubeSourceModel[];
}

@Injectable()
export class YoutubeSourceStoreService extends signalStore(
  withState<State>({ youtubeSorces: [] }),
  withCallState(),
  withMethods(({ $update },
    youtubeSourceService = inject(YoutubeSourceService)) => ({
      load: rxMethod<void>(
        pipe(
          tap(() => $update(setLoading())),
          switchMap(() => youtubeSourceService.getYoutubeSources()),
          tap((youtubeSorces) => $update({ youtubeSorces }, setLoaded()))
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
