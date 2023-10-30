import { CUSTOM_ELEMENTS_SCHEMA, EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sidebar, SidebarSecondary } from './interface/sidebar.interface';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarServices } from '../../services/navbar.services';
import { SidebarComponent } from './sidebar.component';
import { TooltipModule } from '@vissoto-angular/ui';
import { of } from 'rxjs';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let navbarServices: NavbarServices;

  const mockSidebar: Sidebar[] = [
    {
      selected: true,
      target: '_blank',
      text: 'text01',
      href: 'href01',
      iconCss: 'css',
      textAuxiliary: 'auxiliary',
      textAuxiliaryCollor: 'collor',
    },
    {
      selected: false,
      target: '_blank',
      text: 'text02',
      href: 'href02',
      iconCss: 'css2',
      textAuxiliary: 'auxiliary2',
      textAuxiliaryCollor: 'collor2',
    },
  ];

  const mockSidebarSecondary: SidebarSecondary[] = [
    {
      items: mockSidebar,
      title: 'title01',
      textAuxiliary: 'auxiliary2',
      textAuxiliaryCollor: 'collor2',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      providers: [NavbarServices],
      imports: [HttpClientModule, CommonModule, TooltipModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    navbarServices = TestBed.inject(NavbarServices);
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('toggleMenu', () => {
    const emitter = new EventEmitter<boolean>();
    component.showMenu = false;
    component.toggleMenuEmitter = emitter;
    component.toggleMenu();
    emitter.emit();
    expect(component.showMenu).toBeTruthy();
    emitter.emit();
    expect(component.showMenu).toBeFalsy();
  });

  test('clickMenu', () => {
    component.clickMenu();
    expect(component.showMenu).toBeFalsy();
  });

  test('getPrimaryMenu', () => {
    jest.spyOn(navbarServices, 'getMenuPrincipal').mockImplementation(() => of(mockSidebar));
    component['getPrimaryMenu']();
    expect(component.sidebarPrincipal).toEqual(mockSidebar);
  });

  test('getSecondaryMenu', () => {
    jest.spyOn(navbarServices, 'getMenuSecondary').mockImplementation(() => of(mockSidebarSecondary));
    component['getSecondaryMenu']();
    expect(component.sidebarSecondary).toEqual(mockSidebarSecondary);
  });
});
