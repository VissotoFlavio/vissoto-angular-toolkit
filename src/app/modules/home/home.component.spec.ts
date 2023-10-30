import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CardAlfaModule, TooltipModule } from '@vissoto-angular/ui';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharingComponentsModule } from './../../components/components.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCardsComponent],
      imports: [RouterTestingModule, SharingComponentsModule, CommonModule, TooltipModule, CardAlfaModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
