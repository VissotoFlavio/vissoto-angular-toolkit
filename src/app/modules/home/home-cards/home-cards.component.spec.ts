import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CardAlfa, CardAlfaModule } from '@vissoto-angular/ui';
import { CommonModule, DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardsComponent } from './home-cards.component';
import { HomeServices } from '../../../../../src/app/services/home.services';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { mockCardsPost } from './../../../tests/mocks/cards-post.mock';
import { of } from 'rxjs';

describe('HomeCardsComponent', () => {
  let component: HomeCardsComponent;
  let fixture: ComponentFixture<HomeCardsComponent>;
  let services: HomeServices;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCardsComponent],
      providers: [DatePipe, HomeServices],
      imports: [RouterTestingModule, CommonModule, CardAlfaModule, HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCardsComponent);
    services = TestBed.inject(HomeServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should return cards', () => {
    const mock = mockCardsPost;
    const mockConverts: CardAlfa[] = [];

    mock.forEach((element) => {
      mockConverts.push(component['convertCardAlfa'](element));
    });
    jest.spyOn(services, 'getLastPosts').mockImplementation(() => of(mock));

    jest.useFakeTimers();
    component['getCards']();
    jest.runOnlyPendingTimers();

    expect(component.cards).not.toEqual(undefined);
    expect(component.cards.length).toBe(mock.length);
    expect(component.cards).toEqual(mockConverts);
  });
});
