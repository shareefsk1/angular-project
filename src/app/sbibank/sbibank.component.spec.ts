import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbibankComponent } from './sbibank.component';

describe('SbibankComponent', () => {
  let component: SbibankComponent;
  let fixture: ComponentFixture<SbibankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbibankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbibankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
