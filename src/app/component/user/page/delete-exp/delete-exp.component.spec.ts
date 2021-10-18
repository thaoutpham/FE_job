import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExpComponent } from './delete-exp.component';

describe('DeleteExpComponent', () => {
  let component: DeleteExpComponent;
  let fixture: ComponentFixture<DeleteExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
