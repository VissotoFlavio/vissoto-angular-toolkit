import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleViewerComponent } from './example-viewer.component';

describe('ExampleViewerComponent', () => {
  let component: ExampleViewerComponent;
  let fixture: ComponentFixture<ExampleViewerComponent>;

  Object.assign(navigator, {
    clipboard: {
      writeText: () => {},
    },
  });

  Object.assign(document, {
    execCommand: () => {},
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleViewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should copy to clipboard', () => {
    component.clickCopy();
    expect(navigator.clipboard).toEqual(navigator.clipboard);
  });
});
