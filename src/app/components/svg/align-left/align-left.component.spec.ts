import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignLeftComponent } from './align-left.component';

describe('AlignLeftComponent', () => {
  let component: AlignLeftComponent;
  let fixture: ComponentFixture<AlignLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
