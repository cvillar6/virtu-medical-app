import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from '../shared/shared.module';
import { AnalyticsPortalRoutingModule } from './analytics-portal-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { FeaturesComponent } from './components/features/features.component';
import { AnalyticsPortalPageComponent } from './pages/analytics-portal-page/analytics-portal-page.component';
import { HospitalizationPageComponent } from './pages/hospitalization-page/hospitalization-page.component';
import { ImagingPageComponent } from './pages/imaging-page/imaging-page.component';

@NgModule({
  declarations: [
    AnalyticsPortalPageComponent,
    BannerComponent,
    FeaturesComponent,
    HospitalizationPageComponent,
    ImagingPageComponent,
  ],
  imports: [
    CommonModule,
    AnalyticsPortalRoutingModule,
    MatExpansionModule,
    SharedModule,
  ],
})
export class AnalyticsPortalModule {}