import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevCompComponent } from './dev-comp.component';

describe('DevCompComponent', () => {
  let component: DevCompComponent;
  let fixture: ComponentFixture<DevCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
