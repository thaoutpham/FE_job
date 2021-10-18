import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditAccountComponent } from './user-edit-account.component';

describe('UserEditAccountComponent', () => {
  let component: UserEditAccountComponent;
  let fixture: ComponentFixture<UserEditAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
