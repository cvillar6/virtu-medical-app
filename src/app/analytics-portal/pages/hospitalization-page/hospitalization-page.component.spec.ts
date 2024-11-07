import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalizationPageComponent } from './hospitalization-page.component';

describe('HospitalizationPageComponent', () => {
  let component: HospitalizationPageComponent;
  let fixture: ComponentFixture<HospitalizationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalizationPageComponent]
    });
    fixture = TestBed.createComponent(HospitalizationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
