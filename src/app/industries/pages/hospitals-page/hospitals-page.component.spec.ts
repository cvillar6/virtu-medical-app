import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsPageComponent } from './hospitals-page.component';

describe('HospitalsPageComponent', () => {
  let component: HospitalsPageComponent;
  let fixture: ComponentFixture<HospitalsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalsPageComponent]
    });
    fixture = TestBed.createComponent(HospitalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
