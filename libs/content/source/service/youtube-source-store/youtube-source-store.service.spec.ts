import { TestBed } from '@angular/core/testing';
import { provideYoutubeSourceServiceMock } from '../../testing/youtube-source-service.mock';
import { YoutubeSourceStore } from './youtube-source-store.service';

describe('YoutubeSourceStore', () => {
  let store: InstanceType<typeof YoutubeSourceStore>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeSourceStore, provideYoutubeSourceServiceMock()],
    });
    store = TestBed.inject(YoutubeSourceStore);
  });

  it('should load the sources on init, sorted by order', () => {
    expect(store.youtubeSources().map((source) => source.order)).toEqual([0, 5, 20]);
    expect(store.loaded()).toBe(true);
  });

  it('should track the current player', () => {
    store.setPlayer('id-3');
    expect(store.currentPlayerId()).toBe('id-3');
  });
});
