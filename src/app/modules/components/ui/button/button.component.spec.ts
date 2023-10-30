import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { ButtonServices } from '../../../../services/components/ui/button/button-events.services';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharingComponentsModule } from '../../../../components/components.module';
import { mockButtonEvents } from './../../../../tests/mocks/button-events.mock';
import { of } from 'rxjs';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let services: ButtonServices;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      providers: [ButtonServices],
      imports: [SharingComponentsModule, CommonModule, HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    services = TestBed.inject(ButtonServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should return ButtonEvent', () => {
    const mock = mockButtonEvents;

    jest.spyOn(services, 'getButtonEvents').mockImplementation(() => of(mock));

    jest.useFakeTimers();
    component['getButtonEvents']();
    jest.runOnlyPendingTimers();

    expect(component.buttonEvents).not.toEqual(undefined);
    expect(component.buttonEvents.length).toBe(mock.length);
    expect(component.buttonEvents).toEqual(mock);
  });
});
