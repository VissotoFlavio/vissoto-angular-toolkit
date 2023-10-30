import { ButtonEvents } from './../../../../interfaces/components/ui/button/button-events.interface';
import { ButtonServices } from './button-events.services';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestClientServices } from '@vissoto-angular/http-client';
import { TestBed } from '@angular/core/testing';
import { mockButtonEvents } from '../../../../tests/mocks/button-events.mock';
import { of } from 'rxjs';

describe('ButtonServices', () => {
  let service: ButtonServices;
  let http: HttpRequestClientServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequestClientServices],
      imports: [HttpClientModule],
    }).compileComponents();

    service = TestBed.inject(ButtonServices);
    http = TestBed.inject(HttpRequestClientServices);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test('should create', () => {
    expect(service).toBeTruthy();
  });

  test('should return ButtonEvents', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockButtonEvents));
    service.getButtonEvents().subscribe({
      next: (x: ButtonEvents[]) => {
        expect(x.length).toBe(mockButtonEvents.length);
        expect(x).toEqual(mockButtonEvents);
      },
    });
  });
});
