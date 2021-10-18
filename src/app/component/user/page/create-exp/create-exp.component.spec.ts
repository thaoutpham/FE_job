import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExpComponent } from './create-exp.component';

describe('CreateExpComponent', () => {
  let component: CreateExpComponent;
  let fixture: ComponentFixture<CreateExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
