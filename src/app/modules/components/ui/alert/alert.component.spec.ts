import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockAlertRequest, mockEventsRequest } from '../../../../tests/mocks/components/ui/mocks';

import { AlertComponent } from './alert.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestClientServices } from '@vissoto-angular/http-client';
import { UIServices } from '../../../../services/components/ui/ui.services';
import { of } from 'rxjs';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let uiServices: UIServices;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertComponent],
      providers: [HttpRequestClientServices, UIServices],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertComponent);
    uiServices = TestBed.inject(UIServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('getValuesPageRequest', () => {
    jest.spyOn(uiServices, 'getAlertCodes').mockImplementation(() => of(mockAlertRequest));
    component['getValuesPageRequest']();
    expect(component.valuesPage.template).toEqual(mockAlertRequest.data.template);
  });

  test('getEventsPage', () => {
    jest.spyOn(uiServices, 'getEvents').mockImplementation(() => of(mockEventsRequest));
    component['getEventsPage']();
    expect(component.valuesPage.events.length).not.toEqual(0);
  });
});
