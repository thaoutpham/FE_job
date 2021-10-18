import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top6RecommendedComponent } from './top6-recommended.component';

describe('Top6RecommendedComponent', () => {
  let component: Top6RecommendedComponent;
  let fixture: ComponentFixture<Top6RecommendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top6RecommendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top6RecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
