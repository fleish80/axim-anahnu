import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoPlayer } from './video-player';

describe('VideoPlayer', () => {
  let fixture: ComponentFixture<VideoPlayer>;

  function render(youtubeId = 'xWx3R7WaAQY'): HTMLElement {
    fixture = TestBed.createComponent(VideoPlayer);
    fixture.componentRef.setInput('youtubeId', youtubeId);
    fixture.componentRef.setInput('title', 'A Tribe of Brothers and Sisters');
    fixture.componentRef.setInput('caption', 'Galgalatz');
    fixture.componentRef.setInput('playLabel', 'Play the video');
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }

  it('should show only the thumbnail until the visitor presses play', () => {
    const element = render();

    expect(element.querySelector('iframe')).toBeNull();
    expect(element.querySelector('img')?.getAttribute('src')).toBe(
      'https://i.ytimg.com/vi/xWx3R7WaAQY/maxresdefault.jpg',
    );
    expect(element.querySelector('button')?.getAttribute('aria-label')).toBe('Play the video');
  });

  it('should load the privacy-enhanced player and start it on play', async () => {
    const element = render();

    element.querySelector('button')?.click();
    await fixture.whenStable();

    const iframe = element.querySelector('iframe');
    expect(iframe?.getAttribute('src')).toBe(
      'https://www.youtube-nocookie.com/embed/xWx3R7WaAQY?autoplay=1&rel=0',
    );
    expect(iframe?.getAttribute('title')).toBe('A Tribe of Brothers and Sisters');
  });

  it('should refuse anything that is not a YouTube video id', () => {
    expect(() => render('"><script>')).toThrow('Not a YouTube video id');
  });
});
