import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEditAccountComponent } from './company-edit-account.component';

describe('CompanyEditComponent', () => {
  let component: CompanyEditAccountComponent;
  let fixture: ComponentFixture<CompanyEditAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyEditAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEditAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
