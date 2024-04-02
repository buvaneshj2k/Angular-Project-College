import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepmarkentryComponent } from './depmarkentry.component';

describe('DepmarkentryComponent', () => {
  let component: DepmarkentryComponent;
  let fixture: ComponentFixture<DepmarkentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepmarkentryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepmarkentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
