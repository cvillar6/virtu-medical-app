import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationPageComponent } from './transportation-page.component';

describe('TransportationPageComponent', () => {
  let component: TransportationPageComponent;
  let fixture: ComponentFixture<TransportationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportationPageComponent]
    });
    fixture = TestBed.createComponent(TransportationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
