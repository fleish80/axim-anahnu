import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { HolocaustComponent } from './holocaust.component';

describe('HolocaustComponent', () => {
  let component: HolocaustComponent;
  let fixture: ComponentFixture<HolocaustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HolocaustComponent,
        TranslocoTestingModule.forRoot({
          langs: { he: {} },
          translocoConfig: { availableLangs: ['he'], defaultLang: 'he' },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HolocaustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
