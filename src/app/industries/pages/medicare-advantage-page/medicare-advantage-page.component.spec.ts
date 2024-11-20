import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicareAdvantagePageComponent } from './medicare-advantage-page.component';

describe('MedicareAdvantagePageComponent', () => {
  let component: MedicareAdvantagePageComponent;
  let fixture: ComponentFixture<MedicareAdvantagePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicareAdvantagePageComponent]
    });
    fixture = TestBed.createComponent(MedicareAdvantagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
