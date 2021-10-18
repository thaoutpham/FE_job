import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTopCompanyComponent } from './post-top-company.component';

describe('PostTopCompanyComponent', () => {
  let component: PostTopCompanyComponent;
  let fixture: ComponentFixture<PostTopCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTopCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTopCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
