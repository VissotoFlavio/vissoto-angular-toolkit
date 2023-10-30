import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { CodeViewer } from '../../../../components/code-viewer/interfaces/code-viewer.interface';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestClientServices } from '@vissoto-angular/http-client';
import { Language } from '../../../../components/code-viewer/interfaces/languages.enum';
import { RequestDefault } from '../../../../interfaces/request/request.interface';
import { RouterTestingModule } from '@angular/router/testing';
import { SelectComponent } from './select.component';
import { SelectRequest } from '../../../../interfaces/components/ui/select/select-request.interface';
import { SelectServices } from '../../../../services/components/ui/select/select.services';
import { UIServices } from './../../../../services/components/ui/ui.services';
import { of } from 'rxjs';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let uiService: UIServices;
  let selectServices: SelectServices;
  let fixture: ComponentFixture<SelectComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: {} },
    fragment: of('#anchor'),
  } as ActivatedRoute;

  const mockGetSizeEnum = {
    data: {
      code: 'code',
      language: Language.CSS,
    },
  } as RequestDefault<CodeViewer>;

  const mockGetSelectCodes = {
    data: {
      codeModule: {
        code: 'codeModule',
        language: Language.TypeScript,
      },
      codeRounded: {
        code: 'codeRounded',
        language: Language.TypeScript,
      },
      codeTitle: {
        code: 'codeTitle',
        language: Language.TypeScript,
      },
      events: [
        {
          name: 'name',
          return: 'return',
          trigger: 'trigger',
        },
      ],
    },
  } as RequestDefault<SelectRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectComponent],
      providers: [HttpRequestClientServices, UIServices, SelectServices, { provide: ActivatedRoute, useValue: fakeActivatedRoute }],
      imports: [HttpClientModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    uiService = TestBed.inject(UIServices);
    selectServices = TestBed.inject(SelectServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(async () => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    jest.resetAllMocks();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('getRoundedEnum', () => {
    jest.spyOn(uiService, 'getSizeEnum').mockImplementation(() => of(mockGetSizeEnum));
    component['getRoundedEnum']();
    expect(component.roundedEnumCV).toEqual(mockGetSizeEnum.data);
  });

  test('getSelectCodes', () => {
    jest.spyOn(selectServices, 'getSelectCodes').mockImplementation(() => of(mockGetSelectCodes));
    component['getSelectRequest']();
    expect(component.events).toEqual(mockGetSelectCodes.data.events);
    expect(component.moduleCV).toEqual(mockGetSelectCodes.data.codeModule);
    expect(component.roundedCV).toEqual(mockGetSelectCodes.data.codeRounded);
    expect(component.titleCV).toEqual(mockGetSelectCodes.data.codeTitle);
  });

  test('scrollToAnchor', () => {
    const docOriginal = document;
    const mockElement = {
      scrollIntoView: (arg?: boolean | ScrollIntoViewOptions) => {},
    } as Element;
    const spy = jest.spyOn(document, 'querySelector').mockReturnValue(mockElement);
    component.scrollToAnchor('fragmento');
    expect(spy).toHaveBeenCalled();
    document = docOriginal;
  });
});
