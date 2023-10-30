import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlfa } from '@vissoto-angular/ui';
import { ComponentsComponent } from './components.component';

describe('ComponentsComponent', () => {
  let component: ComponentsComponent;
  let fixture: ComponentFixture<ComponentsComponent>;

  const mockCards: CardAlfa[] = [
    {
      imageSrc: './../../../assets/img/http.png',
      message: 'Componente HTTP Client',
      title: 'HTTP Client',
    },
    {
      imageSrc: './../../../assets/img/blackhole.png',
      message: 'Componente UI',
      title: 'UI',
    },
  ] as CardAlfa[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // test('clickCard', () => {
  //   component.clickCard(mockCards[0]);
  // });
});
