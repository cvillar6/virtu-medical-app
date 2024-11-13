import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralManagementPageComponent } from './referral-management-page.component';

describe('ReferralManagementPageComponent', () => {
  let component: ReferralManagementPageComponent;
  let fixture: ComponentFixture<ReferralManagementPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferralManagementPageComponent]
    });
    fixture = TestBed.createComponent(ReferralManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
