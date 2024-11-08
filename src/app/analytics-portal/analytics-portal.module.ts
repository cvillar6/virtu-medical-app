import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { AnalyticsPortalRoutingModule } from './analytics-portal-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { FeatureBannerComponent } from './components/feature-banner/feature-banner.component';
import { FeaturesComponent } from './components/features/features.component';
import { KeyFeatureComponent } from './components/key-feature/key-feature.component';
import { AnalyticsPortalPageComponent } from './pages/analytics-portal-page/analytics-portal-page.component';
import { HospitalizationPageComponent } from './pages/hospitalization-page/hospitalization-page.component';

@NgModule({
  declarations: [
    AnalyticsPortalPageComponent,
    BannerComponent,
    FeaturesComponent,
    HospitalizationPageComponent,
    FeatureBannerComponent,
    KeyFeatureComponent,
  ],
  imports: [CommonModule, AnalyticsPortalRoutingModule, MatExpansionModule],
})
export class AnalyticsPortalModule {}
