import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueBasedCarePageComponent } from './value-based-care-page.component';

describe('ValueBasedCarePageComponent', () => {
  let component: ValueBasedCarePageComponent;
  let fixture: ComponentFixture<ValueBasedCarePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValueBasedCarePageComponent]
    });
    fixture = TestBed.createComponent(ValueBasedCarePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
