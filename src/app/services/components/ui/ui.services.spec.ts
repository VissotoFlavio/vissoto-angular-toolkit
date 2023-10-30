import {
  mockAlertRequest,
  mockAttributesHTML,
  mockCalendarRequest,
  mockEnumSize,
  mockModalRequest,
} from './../../../tests/mocks/components/ui/mocks';
import { mockCheckboxRequest, mockEventsRequest, mockInputTextRequest } from '../../../tests/mocks/components/ui/mocks';

import { AlertRequest } from '../../../interfaces/components/ui/alert.request';
import { AttributesItem } from './../../../interfaces/components/attributes.interface';
import { CalendarRequest } from '../../../interfaces/components/ui/calendar.request';
import { CheckboxRequest } from '../../../interfaces/components/ui/checkbox.request.interface';
import { CodeViewer } from '../../../components/code-viewer/interfaces/code-viewer.interface';
import { EventsRequest } from '../../../interfaces/components/events.interface';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestClientServices } from '@vissoto-angular/http-client';
import { InputTextRequest } from '../../../interfaces/components/ui/input-text.request.interface';
import { ModalRequest } from '../../../interfaces/components/ui/modal.request.interface';
import { RequestDefault } from '../../../interfaces/request/request.interface';
import { TestBed } from '@angular/core/testing';
import { UIServices } from './ui.services';
import { of } from 'rxjs';

describe('UIServices', () => {
  let service: UIServices;
  let http: HttpRequestClientServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequestClientServices],
      imports: [HttpClientModule],
    }).compileComponents();

    service = TestBed.inject(UIServices);
    http = TestBed.inject(HttpRequestClientServices);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test('should create', () => {
    expect(service).toBeTruthy();
  });

  test('should return checkbox json', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockCheckboxRequest));
    service.getCheckboxCodes().subscribe({
      next: (x: RequestDefault<CheckboxRequest>) => {
        expect(x.data).toBe(mockCheckboxRequest.data);
      },
    });
  });

  test('should return getModalCodes json', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockModalRequest));
    service.getModalCodes().subscribe({
      next: (x: RequestDefault<ModalRequest>) => {
        expect(x.data).toBe(mockModalRequest.data);
      },
    });
  });

  test('should return events json', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockEventsRequest));
    service.getEvents().subscribe({
      next: (x: RequestDefault<EventsRequest>) => {
        expect(x.data).toBe(mockCheckboxRequest.data);
      },
    });
  });

  test('should getSizeEnum', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockEnumSize));
    service.getSizeEnum().subscribe({
      next: (x: RequestDefault<CodeViewer>) => {
        expect(x.data).toBe(mockEnumSize.data);
      },
    });
  });

  test('should getInputTextCodes', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockInputTextRequest));
    service.getInputTextCodes().subscribe({
      next: (x: RequestDefault<InputTextRequest>) => {
        expect(x.data).toBe(mockInputTextRequest.data);
      },
    });
  });

  test('should return AttributesHTML', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockAttributesHTML));
    service.getAttributes(['placeholder', 'required', 'max']).subscribe({
      next: (x: RequestDefault<AttributesItem[]>) => {
        expect(x.data).toBe(mockAttributesHTML.data);
      },
    });
  });

  test('should return getAlertCodes json', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockAlertRequest));
    service.getAlertCodes().subscribe({
      next: (x: RequestDefault<AlertRequest>) => {
        expect(x.data).toBe(mockAlertRequest.data);
      },
    });
  });

  test('should return getCalendarCodes json', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockCalendarRequest));
    service.getCalendarCodes().subscribe({
      next: (x: RequestDefault<CalendarRequest>) => {
        expect(x.data).toBe(mockCalendarRequest.data);
      },
    });
  });
});
