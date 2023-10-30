import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeViewerComponent } from './code-viewer.component';
import { Language } from './interfaces/languages.enum';

describe('CodeViewerComponent', () => {
  let component: CodeViewerComponent;
  let fixture: ComponentFixture<CodeViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeViewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should start with parameter CodeViewer', () => {
    component.codeViewer = {
      code: '<div>oi</div>',
      language: Language.HTML,
    };
    component.ngAfterViewInit();
    expect(component.codeElement.nativeElement.innerHTML).not.toBeUndefined();
  });

  test('should start without parameter CodeViewer', () => {
    component.codeViewer = {
      code: '<div>oi</div>',
    };
    component.ngAfterViewInit();
    expect(component.codeElement.nativeElement.innerHTML).not.toBeUndefined();
  });

  test('should start with parameter CodeViewer without language', () => {
    component.codeViewer = {
      code: '<div>oi</div>',
    };
    component.ngAfterViewInit();
    expect(component.codeElement.nativeElement.innerHTML).not.toBeUndefined();
  });

  test('should start without parameter CodeViewer', () => {
    component.ngAfterViewInit();
    expect(component.codeElement.nativeElement.innerHTML).toBe('');
  });
});
