import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianPageComponent } from './physician-page.component';

describe('PhysicianPageComponent', () => {
  let component: PhysicianPageComponent;
  let fixture: ComponentFixture<PhysicianPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhysicianPageComponent]
    });
    fixture = TestBed.createComponent(PhysicianPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
