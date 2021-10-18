import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5RecommendedCompanyComponent } from './top5-recommended-company.component';

describe('Top5RecommendedCompanyComponent', () => {
  let component: Top5RecommendedCompanyComponent;
  let fixture: ComponentFixture<Top5RecommendedCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top5RecommendedCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top5RecommendedCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
