import { Provider, signal } from '@angular/core';
import { of } from 'rxjs';
import { YoutubeSourceModel } from '../models/youtube-source.model';
import { YoutubeSourceService } from '../service/youtube-source/youtube-source.service';

export const YOUTUBE_SOURCES_MOCK: YoutubeSourceModel[] = [
  { title: 'Second', youtubeId: 'id-2', order: 20 },
  { title: 'First', youtubeId: 'id-1', order: 0 },
  { title: 'Middle', youtubeId: 'id-3', order: 5 },
];

/** Replaces YoutubeSourceService so specs never touch Firestore or load the YouTube iframe API. */
export function provideYoutubeSourceServiceMock(sources = YOUTUBE_SOURCES_MOCK, apiLoaded = false): Provider {
  return {
    provide: YoutubeSourceService,
    useValue: {
      apiLoaded: signal(apiLoaded),
      getYoutubeSources: () => of(sources.map((source) => ({ ...source }))),
    },
  };
}
