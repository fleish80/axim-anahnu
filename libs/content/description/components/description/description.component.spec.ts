import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { DescriptionComponent } from './description.component';

describe('DescriptionComponent', () => {
  let component: DescriptionComponent;
  let fixture: ComponentFixture<DescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DescriptionComponent,
        TranslocoTestingModule.forRoot({
          langs: { he: {} },
          translocoConfig: { availableLangs: ['he'], defaultLang: 'he' },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
