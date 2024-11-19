import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuePageComponent } from './revenue-page.component';

describe('RevenuePageComponent', () => {
  let component: RevenuePageComponent;
  let fixture: ComponentFixture<RevenuePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevenuePageComponent]
    });
    fixture = TestBed.createComponent(RevenuePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
