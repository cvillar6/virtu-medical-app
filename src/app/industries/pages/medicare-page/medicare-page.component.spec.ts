import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicarePageComponent } from './medicare-page.component';

describe('MedicarePageComponent', () => {
  let component: MedicarePageComponent;
  let fixture: ComponentFixture<MedicarePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicarePageComponent]
    });
    fixture = TestBed.createComponent(MedicarePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
