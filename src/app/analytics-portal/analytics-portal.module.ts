import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnalyticsPortalRoutingModule } from './analytics-portal-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { AnalyticsPortalPageComponent } from './pages/analytics-portal-page/analytics-portal-page.component';
import { FeaturesComponent } from './components/features/features.component';
import { HospitalizationPageComponent } from './pages/hospitalization-page/hospitalization-page.component';
import { FeatureBannerComponent } from './components/feature-banner/feature-banner.component';

@NgModule({
  declarations: [AnalyticsPortalPageComponent, BannerComponent, FeaturesComponent, HospitalizationPageComponent, FeatureBannerComponent],
  imports: [CommonModule, AnalyticsPortalRoutingModule],
})
export class AnalyticsPortalModule {}
