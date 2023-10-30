import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClienteComponent } from './http-cliente.component';

describe('HttpClienteComponent', () => {
  let component: HttpClienteComponent;
  let fixture: ComponentFixture<HttpClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
