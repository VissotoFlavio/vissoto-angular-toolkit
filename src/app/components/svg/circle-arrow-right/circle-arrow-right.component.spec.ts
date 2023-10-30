import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleArrowRightComponent } from './circle-arrow-right.component';

describe('CircleArrowRightComponent', () => {
  let component: CircleArrowRightComponent;
  let fixture: ComponentFixture<CircleArrowRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleArrowRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleArrowRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
