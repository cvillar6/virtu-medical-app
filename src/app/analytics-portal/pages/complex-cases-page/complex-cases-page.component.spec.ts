import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexCasesPageComponent } from './complex-cases-page.component';

describe('ComplexCasesPageComponent', () => {
  let component: ComplexCasesPageComponent;
  let fixture: ComponentFixture<ComplexCasesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplexCasesPageComponent]
    });
    fixture = TestBed.createComponent(ComplexCasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
