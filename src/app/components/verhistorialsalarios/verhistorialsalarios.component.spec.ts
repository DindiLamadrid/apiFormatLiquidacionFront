import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerhistorialsalariosComponent } from './verhistorialsalarios.component';

describe('VerhistorialsalariosComponent', () => {
  let component: VerhistorialsalariosComponent;
  let fixture: ComponentFixture<VerhistorialsalariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerhistorialsalariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerhistorialsalariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
