import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecommendedCompanyComponent } from './all-recommended-company.component';

describe('AllRecommendedCompanyComponent', () => {
  let component: AllRecommendedCompanyComponent;
  let fixture: ComponentFixture<AllRecommendedCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRecommendedCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRecommendedCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
