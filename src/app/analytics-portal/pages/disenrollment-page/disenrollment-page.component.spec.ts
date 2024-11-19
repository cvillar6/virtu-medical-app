import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenrollmentPageComponent } from './disenrollment-page.component';

describe('DisenrollmentPageComponent', () => {
  let component: DisenrollmentPageComponent;
  let fixture: ComponentFixture<DisenrollmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisenrollmentPageComponent]
    });
    fixture = TestBed.createComponent(DisenrollmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
