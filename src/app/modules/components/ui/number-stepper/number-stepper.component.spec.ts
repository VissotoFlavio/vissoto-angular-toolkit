import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberStepperComponent } from './number-stepper.component';

describe('NumberStepperComponent', () => {
  let component: NumberStepperComponent;
  let fixture: ComponentFixture<NumberStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
