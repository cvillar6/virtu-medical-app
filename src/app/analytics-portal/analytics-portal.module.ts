import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from '../shared/shared.module';
import { AnalyticsPortalRoutingModule } from './analytics-portal-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { FeaturesComponent } from './components/features/features.component';
import { AnalyticsPortalPageComponent } from './pages/analytics-portal-page/analytics-portal-page.component';
import { HospitalizationPageComponent } from './pages/hospitalization-page/hospitalization-page.component';
import { ReferralManagementPageComponent } from './pages/referral-management-page/referral-management-page.component';
import { DisenrollmentPageComponent } from './pages/disenrollment-page/disenrollment-page.component';

@NgModule({
  declarations: [
    AnalyticsPortalPageComponent,
    BannerComponent,
    FeaturesComponent,
    HospitalizationPageComponent,
    ReferralManagementPageComponent,
    DisenrollmentPageComponent,
    DisenrollmentPageComponent,
  ],
  imports: [
    CommonModule,
    AnalyticsPortalRoutingModule,
    MatExpansionModule,
    SharedModule,
  ],
})
export class AnalyticsPortalModule {}
