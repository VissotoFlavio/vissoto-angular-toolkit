import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlusComponent } from './user-plus.component';

describe('UserPlusComponent', () => {
  let component: UserPlusComponent;
  let fixture: ComponentFixture<UserPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
