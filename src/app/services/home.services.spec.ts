import { HomeServices } from './home.services';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestClientServices } from '@vissoto-angular/http-client';
import { TestBed } from '@angular/core/testing';

describe('HomeServices', () => {
  let service: HomeServices;
  let http: HttpRequestClientServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequestClientServices],
      imports: [HttpClientModule],
    }).compileComponents();

    service = TestBed.inject(HomeServices);
    http = TestBed.inject(HttpRequestClientServices);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test('should create', () => {
    expect(service).toBeTruthy();
  });

  //   test('should return MenuSecondary', () => {
  //     jest.spyOn(http, 'execute').mockImplementation(() => of(mockNavbar));
  //     service.getMenuSecondary().subscribe({
  //       next: (x: NavbarSecondary[]) => {
  //         expect(x.length).toBe(mockNavBarSecondary.length);
  //         expect(x).toEqual(mockNavBarSecondary);
  //       },
  //     });
  //   });
});
