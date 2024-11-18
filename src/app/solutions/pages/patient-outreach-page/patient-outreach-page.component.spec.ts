import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientOutreachPageComponent } from './patient-outreach-page.component';

describe('PatientOutreachPageComponent', () => {
  let component: PatientOutreachPageComponent;
  let fixture: ComponentFixture<PatientOutreachPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientOutreachPageComponent]
    });
    fixture = TestBed.createComponent(PatientOutreachPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
