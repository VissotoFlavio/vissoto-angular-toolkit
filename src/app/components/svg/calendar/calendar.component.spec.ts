import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoCalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: IcoCalendarComponent;
  let fixture: ComponentFixture<IcoCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IcoCalendarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IcoCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
