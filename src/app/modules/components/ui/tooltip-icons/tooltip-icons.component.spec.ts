import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipIconsComponent } from './tooltip-icons.component';

describe('TooltipIconsComponent', () => {
  let component: TooltipIconsComponent;
  let fixture: ComponentFixture<TooltipIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
