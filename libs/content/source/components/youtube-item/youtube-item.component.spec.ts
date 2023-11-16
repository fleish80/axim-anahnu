import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YoutubeItemComponent } from './youtube-item.component';

describe('YoutubeItemComponent', () => {
  let component: YoutubeItemComponent;
  let fixture: ComponentFixture<YoutubeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(YoutubeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
