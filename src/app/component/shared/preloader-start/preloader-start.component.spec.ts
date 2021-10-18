import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloaderStartComponent } from './preloader-start.component';

describe('PreloaderStartComponent', () => {
  let component: PreloaderStartComponent;
  let fixture: ComponentFixture<PreloaderStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreloaderStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloaderStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
