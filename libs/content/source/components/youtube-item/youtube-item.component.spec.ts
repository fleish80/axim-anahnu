import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YoutubeSourceStore } from '../../service/youtube-source-store/youtube-source-store.service';
import { provideYoutubeSourceServiceMock, YOUTUBE_SOURCES_MOCK } from '../../testing/youtube-source-service.mock';
import { YoutubeItemComponent } from './youtube-item.component';

describe('YoutubeItemComponent', () => {
  let component: YoutubeItemComponent;
  let fixture: ComponentFixture<YoutubeItemComponent>;

  beforeEach(async () => {
    // The YT global normally comes from the iframe API script, which jsdom never loads.
    Object.assign(globalThis, {
      YT: { PlayerState: { UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5 } },
    });

    await TestBed.configureTestingModule({
      imports: [YoutubeItemComponent],
      providers: [YoutubeSourceStore, provideYoutubeSourceServiceMock(YOUTUBE_SOURCES_MOCK, true)],
    }).compileComponents();

    fixture = TestBed.createComponent(YoutubeItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('youtubeSource', YOUTUBE_SOURCES_MOCK[0]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the player and the title', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('youtube-player')).toBeTruthy();
    expect(element.querySelector('.title')?.textContent).toBe('Second');
  });
});
