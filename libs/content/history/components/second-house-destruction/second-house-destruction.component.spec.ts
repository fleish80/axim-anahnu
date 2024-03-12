import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondHouseDestructionComponent } from './second-house-destruction.component';

describe('SecondHouseDestructionComponent', () => {
  let component: SecondHouseDestructionComponent;
  let fixture: ComponentFixture<SecondHouseDestructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondHouseDestructionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondHouseDestructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
