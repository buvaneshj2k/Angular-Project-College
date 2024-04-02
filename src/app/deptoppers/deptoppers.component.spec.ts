import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptoppersComponent } from './deptoppers.component';

describe('DeptoppersComponent', () => {
  let component: DeptoppersComponent;
  let fixture: ComponentFixture<DeptoppersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptoppersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeptoppersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
