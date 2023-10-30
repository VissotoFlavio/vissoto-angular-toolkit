import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockEventsRequest, mockModalRequest } from '../../../../tests/mocks/components/ui/mocks';

import { HttpClientModule } from '@angular/common/http';
import { HttpRequestClientServices } from '@vissoto-angular/http-client';
import { ModalComponent } from './modal.component';
import { UIServices } from '../../../../services/components/ui/ui.services';
import { of } from 'rxjs';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let uiServices: UIServices;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
      providers: [HttpRequestClientServices, UIServices],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    uiServices = TestBed.inject(UIServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('getValuesPageRequest', () => {
    jest.spyOn(uiServices, 'getModalCodes').mockImplementation(() => of(mockModalRequest));
    component['getValuesPageRequest']();
    expect(component.valuesPage.rounded).toEqual(mockModalRequest.data.rounded);
  });

  test('toggleModal', () => {
    component.showModal = true;
    component.toggleModal();
    expect(component.showModal).toBeFalsy();
  });

  test('closeModal', () => {
    component.showModal = true;
    component.closeModal();
    expect(component.showModal).toBeFalsy();
  });

  test('getEventsPage', () => {
    jest.spyOn(uiServices, 'getEvents').mockImplementation(() => of(mockEventsRequest));
    component['getEventsPage']();
    expect(component.valuesPage.events.length).not.toEqual(0);
  });
});
