import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepattendanceComponent } from './depattendance.component';

describe('DepattendanceComponent', () => {
  let component: DepattendanceComponent;
  let fixture: ComponentFixture<DepattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepattendanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
