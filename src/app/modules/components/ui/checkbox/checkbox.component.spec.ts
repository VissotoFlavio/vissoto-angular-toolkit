import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { HttpClientModule } from '@angular/common/http';
import { UIServices } from '../../../../services/components/ui/ui.services';
import { mockCheckboxRequest } from '../../../../tests/mocks/components/ui/mocks';
import { of } from 'rxjs';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;
  let uiServices: UIServices;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxComponent],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    uiServices = TestBed.inject(UIServices);
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('getValuesPageRequest', () => {
    jest.spyOn(uiServices, 'getCheckboxCodes').mockImplementation(() => of(mockCheckboxRequest));
    component['getValuesPageRequest']();
    expect(component.valuesPage).toEqual(mockCheckboxRequest.data);
  });
});
