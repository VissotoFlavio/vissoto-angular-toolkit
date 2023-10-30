import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockAttributesHTML, mockEnumSize, mockEventsRequest, mockInputTextRequest } from './../../../../tests/mocks/components/ui/mocks';

import { HttpClientModule } from '@angular/common/http';
import { HttpRequestClientServices } from '@vissoto-angular/http-client';
import { InputTextComponent } from './input-text.component';
import { UIServices } from '../../../../services/components/ui/ui.services';
import { of } from 'rxjs';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let uiServices: UIServices;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTextComponent],
      providers: [HttpRequestClientServices, UIServices],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(InputTextComponent);
    uiServices = TestBed.inject(UIServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('getSizeEnumRequest', () => {
    jest.spyOn(uiServices, 'getSizeEnum').mockImplementation(() => of(mockEnumSize));
    component['getSizeEnumRequest']();
    expect(component.valuesPage.roundedEnum).toEqual(mockEnumSize.data);
  });

  test('getAttributesHTML', () => {
    jest.spyOn(uiServices, 'getAttributes').mockImplementation((items: string[]) => of(mockAttributesHTML));
    component['getAttributesHTML'](['']);
    expect(component.valuesPage.attributesHTML).toEqual(mockAttributesHTML.data);
  });

  test('getValuesPageRequest', () => {
    jest.spyOn(uiServices, 'getInputTextCodes').mockImplementation(() => of(mockInputTextRequest));
    component['getValuesPageRequest']();
    expect(component.valuesPage.rounded).toEqual(mockInputTextRequest.data.rounded);
  });

  test('getEventsPage', () => {
    jest.spyOn(uiServices, 'getEvents').mockImplementation(() => of(mockEventsRequest));
    component['getEventsPage']();
    expect(component.valuesPage.events.length).not.toEqual(0);
  });
});
