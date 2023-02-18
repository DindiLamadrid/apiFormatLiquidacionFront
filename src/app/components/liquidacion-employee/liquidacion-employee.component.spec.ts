import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidacionEmployeeComponent } from './liquidacion-employee.component';

describe('LiquidacionEmployeeComponent', () => {
  let component: LiquidacionEmployeeComponent;
  let fixture: ComponentFixture<LiquidacionEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidacionEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiquidacionEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
