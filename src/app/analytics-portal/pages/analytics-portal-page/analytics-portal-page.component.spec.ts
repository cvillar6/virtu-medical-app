import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsPortalPageComponent } from './analytics-portal-page.component';

describe('AnalyticsPortalPageComponent', () => {
  let component: AnalyticsPortalPageComponent;
  let fixture: ComponentFixture<AnalyticsPortalPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticsPortalPageComponent]
    });
    fixture = TestBed.createComponent(AnalyticsPortalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
