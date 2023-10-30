import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIconLoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: SvgIconLoadingComponent;
  let fixture: ComponentFixture<SvgIconLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgIconLoadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SvgIconLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
