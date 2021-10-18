import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostByIdComponent } from './list-post-by-id.component';

describe('ListPostByIdComponent', () => {
  let component: ListPostByIdComponent;
  let fixture: ComponentFixture<ListPostByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
