import { Sidebar, SidebarSecondary } from '../components/sidebar/interface/sidebar.interface';
import { mockNavBarSecondary, mockNavbar } from './../tests/mocks/navbar.mock';

import { HttpClientModule } from '@angular/common/http';
import { HttpRequestClientServices } from '@vissoto-angular/http-client';
import { NavbarServices } from './navbar.services';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

describe('NavbarServices', () => {
  let service: NavbarServices;
  let http: HttpRequestClientServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequestClientServices],
      imports: [HttpClientModule],
    }).compileComponents();

    service = TestBed.inject(NavbarServices);
    http = TestBed.inject(HttpRequestClientServices);
  });

  test('should create', () => {
    expect(service).toBeTruthy();
  });

  test('should return menuPrincipal', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockNavbar));
    service.getMenuPrincipal().subscribe({
      next: (x: Sidebar[]) => {
        expect(x.length).toBe(mockNavbar.length);
        expect(x).toEqual(mockNavbar);
      },
    });
  });

  test('should return MenuSecondary', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockNavBarSecondary));
    service.getMenuSecondary().subscribe({
      next: (x: SidebarSecondary[]) => {
        expect(x.length).toBe(mockNavBarSecondary.length);
        expect(x).toEqual(mockNavBarSecondary);
      },
    });
  });
});
