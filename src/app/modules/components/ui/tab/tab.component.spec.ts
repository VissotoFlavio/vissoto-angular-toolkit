import { CUSTOM_ELEMENTS_SCHEMA, ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponents } from '../../../../interfaces/components/events.interface';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestClientServices } from '@vissoto-angular/http-client';
import { ImageRequest } from '../../../../interfaces/components/ui/interfaces/select-request.interface';
import { ImageServices } from './../../../../services/components/ui/interfaces/image.services';
import { Language } from '../../../../components/code-viewer/interfaces/languages.enum';
import { RequestDefault } from '../../../../interfaces/request/request.interface';
import { TabComponent } from './tab.component';
import { TabItem } from '@vissoto-angular/ui';
import { TabRequest } from '../../../../interfaces/components/ui/tab/tab-request.interface';
import { TabServices } from './../../../../services/components/ui/tab/tab.services';
import { of } from 'rxjs';

describe('TabComponent', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;
  let tabServices: TabServices;
  let imageServices: ImageServices;

  const mockTabItens = [
    {
      id: '01',
      text: 'texto 01',
    },
    {
      id: '02',
      text: 'texto 02',
      disabled: true,
    },
  ] as TabItem[];

  const mockDivExemplo = {
    nativeElement: {
      offsetWidth: 450,
    },
  } as ElementRef;

  const mockTabCodes = {
    data: {
      codeModule: {
        code: 'code',
        language: Language.TypeScript,
      },
      interfaceTab: {
        code: 'code',
        language: Language.CSS,
      },
      maxWidthElement: {
        code: 'code',
        language: Language.CSS,
      },
      maxWidthPx: {
        code: 'code',
        language: Language.CSS,
      },
      widthPx: {
        code: 'code',
        language: Language.CSS,
      },
      events: [
        {
          name: 'nameEvent',
          return: 'return event',
          trigger: 'trigger event',
        },
      ] as EventsComponents[],
    },
  } as RequestDefault<TabRequest>;

  const mockImage = {
    data: {
      image: {
        code: 'code image',
        language: Language.TypeScript,
      },
    },
  } as RequestDefault<ImageRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabComponent],
      providers: [HttpRequestClientServices, TabServices, ImageServices],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TabComponent);
    tabServices = TestBed.inject(TabServices);
    imageServices = TestBed.inject(ImageServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(async () => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    jest.resetAllMocks();
  });

  test('onResize', () => {
    const spyOnResize = jest.spyOn(component, 'onResize');
    window.dispatchEvent(new Event('resize'));
    expect(spyOnResize).toHaveBeenCalled();
  });

  test('click', () => {
    component.click(mockTabItens[0]);
    expect(component.itemSelected.id).toEqual(mockTabItens[0].id);
  });

  test('getSizeTab', () => {
    component.divExemplo = mockDivExemplo;
    component['getSizeTab']();
    expect(component.maxWidthTab).toEqual('450px');
  });

  test('getTabRequest getTabRequest', () => {
    jest.spyOn(tabServices, 'getTabCodes').mockImplementation(() => of(mockTabCodes));
    component['getTabRequest']();
    expect(component.moduleCV).toEqual(mockTabCodes.data.codeModule);
    expect(component.interfaceTabCV).toEqual(mockTabCodes.data.interfaceTab);
    expect(component.maxWidthCV).toEqual(mockTabCodes.data.maxWidthPx);
    expect(component.maxWidthElementCV).toEqual(mockTabCodes.data.maxWidthElement);
    expect(component.widthPxCV).toEqual(mockTabCodes.data.widthPx);
    expect(component.events).toEqual(mockTabCodes.data.events);
  });

  test('getTabRequest getImageCodes', () => {
    jest.spyOn(imageServices, 'getImageCodes').mockImplementation(() => of(mockImage));
    component['getTabRequest']();
    expect(component.imageCV).toEqual(mockImage.data.image);
  });
});
