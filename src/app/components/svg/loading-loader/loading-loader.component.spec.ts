import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingLoaderComponent } from './loading-loader.component';

describe('LoadingLoaderComponent', () => {
  let component: LoadingLoaderComponent;
  let fixture: ComponentFixture<LoadingLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
