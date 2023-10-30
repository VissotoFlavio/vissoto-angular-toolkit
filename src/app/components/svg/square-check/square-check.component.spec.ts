import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareCheckComponent } from './square-check.component';

describe('SquareCheckComponent', () => {
  let component: SquareCheckComponent;
  let fixture: ComponentFixture<SquareCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
