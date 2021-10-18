import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top1CompanyComponent } from './top1-company.component';

describe('Top1CompanyComponent', () => {
  let component: Top1CompanyComponent;
  let fixture: ComponentFixture<Top1CompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top1CompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top1CompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
