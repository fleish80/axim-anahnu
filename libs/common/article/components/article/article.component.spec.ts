import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { ArticleComponent } from './article.component';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ArticleComponent,
        TranslocoTestingModule.forRoot({
          langs: { he: {} },
          translocoConfig: { availableLangs: ['he'], defaultLang: 'he' },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('name', 'description');
    fixture.componentRef.setInput('size', 3);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one paragraph per size', () => {
    const paragraphs = (fixture.nativeElement as HTMLElement).querySelectorAll('.article-paragraph');
    expect(paragraphs.length).toBe(3);
  });

  it('should render the title only when hasTitle is set', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h2')).toBeNull();

    fixture.componentRef.setInput('hasTitle', true);
    fixture.detectChanges();
    expect(element.querySelector('h2')).toBeTruthy();
  });
});
