import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotFoodComponent } from './hot-food.component';

describe('HotFoodComponent', () => {
  let component: HotFoodComponent;
  let fixture: ComponentFixture<HotFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
