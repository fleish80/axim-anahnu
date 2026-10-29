import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { provideYoutubeSourceServiceMock } from '../../../source/testing/youtube-source-service.mock';
import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ContentComponent,
        TranslocoTestingModule.forRoot({
          langs: { he: {} },
          translocoConfig: { availableLangs: ['he'], defaultLang: 'he' },
        }),
      ],
      providers: [provideNoopAnimations(), provideYoutubeSourceServiceMock()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
