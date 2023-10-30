import { EventsComponents } from '../../../../interfaces/components/events.interface';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestClientServices } from '@vissoto-angular/http-client';
import { Language } from '../../../../components/code-viewer/interfaces/languages.enum';
import { RequestDefault } from '../../../../interfaces/request/request.interface';
import { TabRequest } from '../../../../interfaces/components/ui/tab/tab-request.interface';
import { TabServices } from './tab.services';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

describe('TabServices', () => {
  let service: TabServices;
  let http: HttpRequestClientServices;

  const mockTabRequest = {
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequestClientServices],
      imports: [HttpClientModule],
    }).compileComponents();

    service = TestBed.inject(TabServices);
    http = TestBed.inject(HttpRequestClientServices);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test('should create', () => {
    expect(service).toBeTruthy();
  });

  test('should return MenuSecondary', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockTabRequest));
    service.getTabCodes().subscribe({
      next: (x: RequestDefault<TabRequest>) => {
        expect(x.data).toBe(mockTabRequest.data);
      },
    });
  });
});
