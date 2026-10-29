import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideYoutubeSourceServiceMock } from '../../testing/youtube-source-service.mock';
import { SourceComponent } from './source.component';

describe('SourceComponent', () => {
  let component: SourceComponent;
  let fixture: ComponentFixture<SourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourceComponent],
      providers: [provideYoutubeSourceServiceMock()],
    }).compileComponents();

    fixture = TestBed.createComponent(SourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose the sources sorted by order', () => {
    expect(component.youtubeSources().map((source) => source.youtubeId)).toEqual(['id-1', 'id-3', 'id-2']);
    expect(component.loaded()).toBe(true);
  });
});
