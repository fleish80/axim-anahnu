import { TestBed } from '@angular/core/testing';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { firstValueFrom, of } from 'rxjs';
import { YOUTUBE_SOURCES_MOCK } from '../../testing/youtube-source-service.mock';
import { YoutubeSourceService } from './youtube-source.service';

jest.mock('@angular/fire/firestore', () => ({
  Firestore: class {},
  doc: jest.fn(() => 'doc-ref'),
  docData: jest.fn(),
}));

describe('YoutubeSourceService', () => {
  let service: YoutubeSourceService;
  const firestore = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Firestore, useValue: firestore }],
    });
    service = TestBed.inject(YoutubeSourceService);
  });

  it('should load the YouTube iframe API once', () => {
    expect(service.apiLoaded()).toBe(true);
    expect(document.querySelector('script[src="https://www.youtube.com/iframe_api"]')).toBeTruthy();
  });

  it('should read the sources field of the Hebrew document', async () => {
    jest.mocked(docData).mockReturnValue(of({ sources: YOUTUBE_SOURCES_MOCK }));

    await expect(firstValueFrom(service.getYoutubeSources())).resolves.toEqual(YOUTUBE_SOURCES_MOCK);
    expect(doc).toHaveBeenCalledWith(firestore, 'he', 'fN3RI0eDxKxKxICnf2wF');
    expect(docData).toHaveBeenCalledWith('doc-ref');
  });
});
