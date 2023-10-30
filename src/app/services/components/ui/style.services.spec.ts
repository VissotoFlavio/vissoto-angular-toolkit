import { mockBorderStyle, mockColorStyle } from '../../../tests/mocks/components/ui/mocks';

import { BorderStyle } from '../../../interfaces/components/ui/style/border.interface';
import { ColorStyle } from '../../../interfaces/components/ui/style/color.interface';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestClientServices } from '@vissoto-angular/http-client';
import { RequestDefault } from '../../../interfaces/request/request.interface';
import { TestBed } from '@angular/core/testing';
import { UIStyleServices } from './style.services';
import { of } from 'rxjs';

describe('UIStyleServices', () => {
  let service: UIStyleServices;
  let http: HttpRequestClientServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequestClientServices],
      imports: [HttpClientModule],
    }).compileComponents();

    service = TestBed.inject(UIStyleServices);
    http = TestBed.inject(HttpRequestClientServices);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test('should create', () => {
    expect(service).toBeTruthy();
  });

  test('should getBorder', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockBorderStyle));
    service.getBorder().subscribe({
      next: (x: RequestDefault<BorderStyle>) => {
        expect(x.data).toBe(mockBorderStyle.data);
      },
    });
  });

  test('should return getModalCodes json', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockColorStyle));
    service.getColor().subscribe({
      next: (x: RequestDefault<ColorStyle>) => {
        expect(x.data).toBe(mockColorStyle.data);
      },
    });
  });
});
